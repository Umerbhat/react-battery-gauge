import { useEffect, useState, useCallback, useRef } from 'react';
import { timing } from '../utils';

export type AnimationType = {
  value: number;
  duration?: number;
  startValue?: number;
  enabled: boolean;
  direction?: 'both' | 'reverse' | 'forward';
  iterationCount?: number | 'infinite';
  easing?: 'linear';
};

export const useCounterAnimation = ({
  value,
  duration = 1000,
  startValue = 0,
  enabled = false,
  direction = 'forward',
  iterationCount = 1,
  easing = 'linear',
}: AnimationType) => {
  const [counterValue, setCounterValue] = useState(startValue);
  const iteration = useRef(0);

  const runAnimation = useCallback(() => {
    const MAX_PROGRESS = 2;
    iteration.current += 1;

    return new Promise((resolve) => {
      let startTime = 0;
      const restartDuration = duration / 5;
      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = timing(
          Math.min(
            (currentTime - startTime) / duration,
            direction === 'both' ? MAX_PROGRESS : 1
          ),
          easing
        );
        function getNewValue(animDirection: 'reverse' | 'forward' | 'both') {
          if (animDirection === 'reverse') {
            return (1 - progress) * (value - startValue) + startValue;
          } else if (progress > 1 && animDirection === 'both') {
            return (
              (MAX_PROGRESS - progress) * (value - startValue) + startValue
            );
          } else {
            return progress * (value - startValue) + startValue;
          }
        }
        let newValue = getNewValue(direction);

        //calculate what to be displayed using the value gotten above
        setCounterValue(Math.floor(newValue));

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else if (direction === 'both' && progress < MAX_PROGRESS) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
          resolve(true);
        }
      };
      iteration.current > 1
        ? setTimeout(() => {
            window.requestAnimationFrame(step);
          }, restartDuration)
        : window.requestAnimationFrame(step);
    });
  }, [value]);

  useEffect(() => {
    if (enabled) {
      let animation = runAnimation();
      const restartAnimation = () => {
        animation.then(() => {
          if (iterationCount === 'infinite') {
            animation = runAnimation();
            restartAnimation();
            return;
          }
          if (iteration.current < iterationCount) {
            animation = runAnimation();
            restartAnimation();
            return;
          }
        });
      };
      restartAnimation();
    }
  }, [enabled, iterationCount]);

  return enabled ? counterValue : value;
};

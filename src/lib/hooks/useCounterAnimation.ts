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

const MAX_ANIMATION_PROGRESS = 1;
const MAX_LOOP_ANIMATION_PROGRESS = 2;

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
    iteration.current += 1;

    return new Promise((resolve) => {
      let startTime = 0;
      const nextIterationDurationGap = duration / 5;
      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = timing(
          Math.min(
            (currentTime - startTime) / duration,
            direction === 'both'
              ? MAX_LOOP_ANIMATION_PROGRESS
              : MAX_ANIMATION_PROGRESS
          ),
          easing
        );
        function getNewValue(animationDir: AnimationType['direction']) {
          if (animationDir === 'reverse') {
            return (1 - progress) * (value - counterValue) + counterValue;
          } else if (progress > 1 && animationDir === 'both') {
            return (
              (MAX_LOOP_ANIMATION_PROGRESS - progress) *
                (value - counterValue) +
              counterValue
            );
          } else {
            return progress * (value - counterValue) + counterValue;
          }
        }
        const newValue = getNewValue(direction);

        //calculate what to be displayed using the value gotten above
        setCounterValue(Math.floor(newValue));

        if (
          progress < MAX_ANIMATION_PROGRESS ||
          (direction === 'both' && progress < MAX_LOOP_ANIMATION_PROGRESS)
        ) {
          window.requestAnimationFrame(step); //continue animation
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
          resolve(true); //complete animation
        }
      };

      // First loop of animation, take no delay
      function runFirstIteration() {
        window.requestAnimationFrame(step);
      }

      // For second loop for animation, take some pause before starting
      function runNextIteration() {
        setTimeout(() => {
          window.requestAnimationFrame(step);
        }, nextIterationDurationGap);
      }
      // start animation
      (function startAnimation() {
        iteration.current > 1 ? runNextIteration() : runFirstIteration();
      })();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, iterationCount, value]);

  return enabled ? counterValue : value;
};

import { useEffect, useState } from 'react';

export const useCounterAnimation = ({
  value,
  duration = 1000,
  startValue = 0,
  enabled = false,
}: {
  value: number;
  duration?: number;
  startValue?: number;
  enabled: boolean;
}) => {
  const [counterValue, setCounterValue] = useState(startValue);

  useEffect(() => {
    if (enabled) {
      let startTime = 0;
      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        setCounterValue(
          Math.floor(progress * (value - startValue) + startValue)
        );

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [value, duration]);

  return enabled ? counterValue : value;
};

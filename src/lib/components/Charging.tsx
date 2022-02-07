import React, { ReactElement } from 'react';
import { BATTERY_BODY, CHARGING_FLASH } from '../constants';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { useGaugeContext } from '../hooks/useGaugeContext';
import { useLevelDimensions } from '../hooks/useLevelDimensions';

interface Props extends React.SVGProps<SVGPathElement> {
  scale?: number;
}
// As per icon path
const iconWidth = 16.8; // As per path
const iconHeight = 28.7;

export default function Charging({ scale, ...pathProps }: Props): ReactElement {
  const {
    canvasWidth,
    canvasHeight,
    orientation,
    customization,
  } = useGaugeContext();
  const { strokeWidth } = customization[BATTERY_BODY];
  const { fill, animated, animationDuration  } = customization[CHARGING_FLASH];
  const animatedOpacityPer = useCounterAnimation({
    value: 100,
    enabled: animated,
    direction: 'both',
    iterationCount: 'infinite',
    duration: animationDuration,
    startValue: 20,
  });

  const { width } = useLevelDimensions();
  const iconXPos = width / 2 + iconWidth / 2;
  const iconYPos = canvasHeight / 2 - iconHeight / 2;
  const transformScale = scale ? `scale(${scale})` : '';
  return (
    <g
      transform={
        orientation === 'vertical'
          ? `rotate(${-90})${transformScale}`
          : transformScale
      }
      style={{
        transformOrigin: `${canvasWidth / 2 - strokeWidth}px ${
          canvasHeight / 2 - strokeWidth / 2
        }px`,
      }}
      opacity={animatedOpacityPer / 100}
    >
      <path
        d={`M${iconXPos},${iconYPos}l-13,16.8l7.4,0l-1.8,11.9l11.2,-16.8l-7.4,0l3.6,-11.9z`}
        fill={fill}
        {...pathProps}
      />
    </g>
  );
}

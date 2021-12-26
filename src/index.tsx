import React, { FC } from 'react';
import {
  BATTERY_BODY,
  BATTERY_CAP,
  BATTERY_METER,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  READING_TEXT,
} from './lib/constants';
import { Battery } from './lib/components/Battery';
import { Canvas } from './lib/Canvas';
import { BatteryLevel } from './lib/components/BatteryLevel';
import { TGaugeCanvas, TGaugeCustom } from './typings';
import { defaultState } from './lib/store/context';
import { ReadingText } from './lib/components/ReadingText';
import { useCounterAnimation } from './lib/hooks/useCounterAnimation';

export interface Props
  extends Omit<React.SVGProps<SVGSVGElement>, 'orientation'> {
  /**
   * Meter value range [0-100]
   */
  value: TGaugeCanvas['padding'];
  /**
   * Meter max value
   */
  maxValue: TGaugeCanvas['maxValue'];
  /**
   * Changes orientation, keeping text horizontal
   */
  orientation?: TGaugeCanvas['orientation'];
  /**
   * Padding of gauge within canvas
   */
  padding?: TGaugeCanvas['padding'];
  /**
   * Enable animation on mount
   */
  animated: boolean;
  /**
   * All components customization
   */
  customization: Partial<TGaugeCustom>;
}

export const BatteryGauge: FC<Props> = ({
  width = 300,
  height = 168,
  children,
  padding = defaultState.padding,
  value = defaultState.value,
  maxValue = defaultState.maxValue,
  customization = defaultState.customization,
  orientation = defaultState.orientation,
  animated = defaultState.animated,
  ...restSvgProps
}) => {
  const allCustomization: TGaugeCustom = {
    [BATTERY_BODY]: {
      ...defaultState.customization[BATTERY_BODY],
      ...customization[BATTERY_BODY],
    },
    [BATTERY_CAP]: {
      ...defaultState.customization[BATTERY_CAP],
      ...customization[BATTERY_CAP],
    },
    [BATTERY_METER]: {
      ...defaultState.customization[BATTERY_METER],
      ...customization[BATTERY_METER],
    },
    [READING_TEXT]: {
      ...defaultState.customization[READING_TEXT],
      ...customization[READING_TEXT],
    },
  };
  const newValue = useCounterAnimation({ value, enabled: animated });
  return (
    <Canvas
      width={width}
      height={height}
      canvasWidth={CANVAS_WIDTH}
      canvasHeight={CANVAS_HEIGHT}
      padding={padding}
      value={newValue}
      maxValue={maxValue}
      orientation={orientation}
      customization={allCustomization}
      transform={
        orientation === 'vertical'
          ? `rotate(-90,${CANVAS_HEIGHT / 2},${CANVAS_HEIGHT / 2})`
          : ''
      }
      {...restSvgProps}
    >
      {children}
      <Battery />
      <BatteryLevel />
      <ReadingText />
    </Canvas>
  );
};

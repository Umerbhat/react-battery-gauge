import React, { FC } from 'react';
import {
  BATTERY_BODY,
  BATTERY_CAP,
  BATTERY_METER,
  CANVAS_WIDTH,
  READING_TEXT,
} from './lib/constants';
import { Battery } from './lib/components/Battery';
import { Canvas } from './lib/Canvas';
import { BatteryLevel } from './lib/components/BatteryLevel';
import { DeepPartial, TGaugeCanvas, TGaugeCustom } from './typings';
import { defaultState } from './lib/store/context';
import { ReadingText } from './lib/components/ReadingText';
import { useCounterAnimation } from './lib/hooks/useCounterAnimation';
import { useClipPathHash } from './lib/hooks/useClipPathHash';

export interface Props
  extends Omit<
    React.SVGProps<SVGSVGElement>,
    'orientation'
  > {
  /**
   * Meter value range [0-100]
   */
  value: TGaugeCanvas['value'];
  /**
   * Meter max value
   */
  maxValue?: TGaugeCanvas['maxValue'];
  /**
   * Changes orientation, keeping text horizontal
   */
  orientation?: TGaugeCanvas['orientation'];

  /**
   * We don't like passing both width and height, can create unusual looking shape. 
   * Size will help gauge to achieve the desired size maintaining aspect ratio
   */
  size?: number;
  /**
   * Gauge aspect ratio,
   * At padding 0 easy to create battery types ->
   * D = 0.56,
   * C = 0.52,
   * AA = 0.28,
   * AAA = 0.23,
   * AAAA = 0.19 ,
   * default C battery
   */
  aspectRatio?: number;
  /**
   * Padding of gauge within canvas
   */
  padding?: TGaugeCanvas['padding'];
  /**
   * Enable animation on mount
   */
  animated?: boolean;
  /**
   * All components customization
   */
  customization?: DeepPartial<TGaugeCustom>;
}

export const BatteryGauge: FC<Props> = ({
  size = 300,
  aspectRatio = defaultState.aspectRatio,
  children,
  padding = defaultState.padding,
  value = defaultState.value,
  maxValue = defaultState.maxValue,
  customization = defaultState.customization,
  orientation = defaultState.orientation,
  animated = defaultState.animated,
  ...restSvgProps
}) => {
  const canvasHeight = Math.round(CANVAS_WIDTH * aspectRatio);
  const height = Math.round(size * aspectRatio);
  const clipPathHash = useClipPathHash()

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
  const canvasPadding = allCustomization.batteryBody.strokeWidth / 2 + padding;
  const newValue = useCounterAnimation({ value, enabled: animated });
  return (
    <Canvas
      width={size}
      height={orientation === 'vertical' ? size : height}
      canvasWidth={CANVAS_WIDTH}
      canvasHeight={canvasHeight}
      padding={canvasPadding}
      value={newValue}
      maxValue={!maxValue ? 1 : maxValue}
      orientation={orientation}
      customization={allCustomization}
      clipPathHash={clipPathHash}
      {...restSvgProps}
    >
      <g
        transform={
          orientation === 'vertical'
            ? `rotate(-90,${CANVAS_WIDTH / 2},${canvasHeight / 2})` // rotate at right top corner
            : ''
        }
      >
        {children}
        <Battery />
        <BatteryLevel />
        <ReadingText />
      </g>
    </Canvas>
  );
};

export default BatteryGauge;

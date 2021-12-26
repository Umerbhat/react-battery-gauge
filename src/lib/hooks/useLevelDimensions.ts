import { BATTERY_CAP, BATTERY_METER, BATTERY_BODY } from './../constants/index';
import { useMemo } from 'react';
import { useBatteryDimensions } from './useBatteryDimensions';
import { useGaugeContext } from './useGaugeContext';

export const useLevelDimensions = () => {
  const { padding, customization } = useGaugeContext();
  const { strokeWidth } = customization[BATTERY_BODY];
  const { capToBodyRatio } = customization[BATTERY_CAP];
  const { outerGap } = customization[BATTERY_METER];
  const { bodyWidth, bodyHeight } = useBatteryDimensions(capToBodyRatio);

  return useMemo(() => {
    const innerBodyWidth = bodyWidth - strokeWidth;
    const innerBodyHeight = bodyHeight - strokeWidth;
    return {
      x: padding + strokeWidth / 2 + outerGap,
      y: padding + strokeWidth / 2 + outerGap,
      width: innerBodyWidth - 2 * outerGap,
      height: innerBodyHeight - 2 * outerGap,
    };
  }, [bodyWidth, bodyHeight, outerGap, padding, strokeWidth]);
};

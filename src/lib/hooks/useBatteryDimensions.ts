import { useGaugeContext } from './useGaugeContext';

export const useBatteryDimensions = (batteryCapRatio: number) => {
  const { canvasHeight, canvasWidth, padding } = useGaugeContext();
  const objectHeight = canvasHeight - 2 * padding; // total canvas height minus vertical padding
  const capHeight = objectHeight * batteryCapRatio;
  const capWidth = capHeight / 2;

  return {
    bodyWidth: canvasWidth - capWidth - 2 * padding,
    bodyHeight: canvasHeight - 2 * padding,
    capWidth,
    capHeight,
  };
};

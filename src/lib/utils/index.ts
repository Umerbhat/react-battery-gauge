export function getValueInPercentage(value: number, maxValue: number) {
  return Math.round((value / maxValue) * 100);
}

export function checkLowBattery(value: number, lowBatteryValue: number) {
  return value < lowBatteryValue;
}

export function getVisibleCellsCount(
  value: number,
  maxValue: number,
  noOfCells: number
) {
  return Math.floor(Math.abs(value / maxValue) * noOfCells);
}

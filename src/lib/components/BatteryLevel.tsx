import React, { useMemo } from 'react';
import {
  BATTERY_BODY,
  BATTERY_METER,
  CLIP_METER,
  CLIP_METER_FILLED,
} from '../constants';
import { useGaugeContext } from '../hooks/useGaugeContext';
import { useLevelDimensions } from '../hooks/useLevelDimensions';
import { checkLowBattery, getVisibleCellsCount } from '../utils';

export const BatteryLevel = () => {
  const { value, maxValue, customization, clipPathHash } = useGaugeContext();
  const { x, y, width, height } = useLevelDimensions();
  const {
    fill,
    lowBatteryFill,
    gradFill,
    lowBatteryValue,
    outerGap,
    noOfCells,
    interCellsGap,
  } = customization[BATTERY_METER];
  const {
    strokeWidth: bodyStrokeWidth,
    cornerRadius: bodyCornerRadius,
  } = customization[BATTERY_BODY];

  const cellList = useMemo(() => {
    const noOfVisibleCells = getVisibleCellsCount(value, maxValue, noOfCells);
    if (noOfVisibleCells === 0 && value > 0) {
      return ['cell'];
    }
    return new Array(noOfVisibleCells).fill('cell');
  }, [value, maxValue, noOfCells]);

  return (
    <g>
      <defs>
        <clipPath id={CLIP_METER + clipPathHash}>
          <rect
            x={x}
            y={y}
            rx={bodyCornerRadius - bodyStrokeWidth / 2 - outerGap}
            ry={bodyCornerRadius - bodyStrokeWidth / 2 - outerGap}
            width={width}
            height={height}
          />
        </clipPath>
        {noOfCells < 2 && gradFill && (
          <linearGradient id={'levelGradient' + clipPathHash}>
            {gradFill.map((item) => {
              return (
                <stop
                  key={item.color}
                  offset={item.offset + '%'}
                  stopColor={item.color}
                />
              );
            })}
          </linearGradient>
        )}
      </defs>
      {noOfCells === 1 && (
        <g>
          {gradFill ? (
            <rect
              className={BATTERY_METER}
              clipPath={`url(#${CLIP_METER_FILLED + clipPathHash})`}
              x={x}
              y={y}
              width={width}
              height={height}
              fill={`url(#levelGradient${clipPathHash})`}
            />
          ) : (
            <rect
              className={BATTERY_METER}
              clipPath={`url(#${CLIP_METER + clipPathHash})`}
              x={x}
              y={y}
              width={(width * value) / maxValue}
              height={height}
              fill={
                checkLowBattery(value, lowBatteryValue) ? lowBatteryFill : fill
              }
            />
          )}
        </g>
      )}
      <g>
        {noOfCells > 1 &&
          cellList.map((_item, index) => {
            return (
              <rect
                key={index}
                className={BATTERY_METER}
                clipPath={`url(#${CLIP_METER + clipPathHash})`}
                x={x + ((width + interCellsGap) / noOfCells) * index}
                y={y}
                width={width / noOfCells - interCellsGap}
                height={height}
                fill={
                  checkLowBattery(value, lowBatteryValue)
                    ? lowBatteryFill
                    : fill
                }
              />
            );
          })}
      </g>
    </g>
  );
};

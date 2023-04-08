import { SVGProps } from 'react';

type ShapeStyles = {
  strokeWidth: number;
  cornerRadius: number;
  fill: string;
  strokeColor: string;
};

export type TGaugeCustom = {
  batteryBody: ShapeStyles;
  batteryCap: ShapeStyles & {
    capToBodyRatio: number;
  };
  batteryMeter: {
    fill: ShapeStyles['fill'];
    lowBatteryFill: ShapeStyles['fill'];
    lowBatteryValue: number;
    outerGap: number;
    noOfCells: number;
    interCellsGap: number;
    gradFill?: { color: string; offset: number }[];
  };
  readingText: SVGProps<SVGTextElement> & {
    lightContrastColor: ShapeStyles['fill'];
    darkContrastColor: ShapeStyles['fill'];
    lowBatteryColor: ShapeStyles['fill'];
    fontFamily: string;
    fontSize: number;
    showPercentage: boolean;
  };
  chargingFlash: SVGProps<SVGPathElement> & {
    scale?: number;
    animated: boolean;
    fill: string;
    /**
     * Fade animation duration in ms
     */
    animationDuration: number;
  };
};

export type TGaugeCanvas = {
  canvasWidth: number;
  canvasHeight: number;
  padding: number;
  value: number;
  maxValue: number;
  orientation: 'horizontal' | 'vertical';
  customization: TGaugeCustom;
  clipPathHash: string;
};

export type DeepPartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};

export type FormatValue = (value: number) => string | number;

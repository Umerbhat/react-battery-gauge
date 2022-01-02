import React from 'react';
import { TGaugeCanvas } from '../typings';
import { CanvasProvider } from './store/Provider';

export interface TCanvasProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'orientation'>,
    TGaugeCanvas {}

export const Canvas = (props: TCanvasProps) => {
  const {
    children,
    canvasWidth,
    canvasHeight,
    padding,
    value,
    maxValue,
    orientation,
    customization,
    clipPathHash,
    ...otherSvgProps
  } = props;
  return (
    <CanvasProvider
      value={{
        canvasWidth,
        canvasHeight,
        padding,
        value,
        maxValue,
        orientation,
        customization,
        clipPathHash,
      }}
    >
      <svg viewBox={`0 0 ${canvasWidth} ${canvasHeight}`} {...otherSvgProps}>
        {children}
      </svg>
    </CanvasProvider>
  );
};

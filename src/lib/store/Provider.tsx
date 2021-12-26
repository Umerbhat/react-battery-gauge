import React, { FC } from 'react';
import { TGaugeCanvas } from '../../typings';
import { Context } from './context';

interface Props {
  value: TGaugeCanvas;
}

export const CanvasProvider: FC<Props> = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

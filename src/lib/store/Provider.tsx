import React, { FC } from 'react';
import type { TGaugeCanvas } from '../../typings';
import { Context } from './context';

interface Props {
  value: TGaugeCanvas & { clipPathHash: string };
}

export const CanvasProvider: FC<Props> = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

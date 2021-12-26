import { ContextType, useContext } from 'react';
import { Context } from '../store/context';

export function useGaugeContext() {
  return useContext(Context);
}

export type UseGaugeContextReturnValue = ContextType<typeof Context>;

import { createContext, useContext } from 'react';

import { IReisefradrag } from '../interfaces/IReisefradrag';
/* eslint-disable @typescript-eslint/no-empty-function */

export type CalculationContent = {
  calculation: IReisefradrag;
  setCalculation: (calculation: IReisefradrag) => void;
};
export const CalculationContext = createContext<CalculationContent>({
  calculation: {} as IReisefradrag, // set a default value
  setCalculation: () => {}
});
export const useCalculationContext = () => useContext(CalculationContext);

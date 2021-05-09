import React from 'react';

import { useCalculationContext } from '../../context/calculationContext';

export default function Calculation() {
  const test = useCalculationContext();

  const { calculation } = test;
  console.log(calculation);

  return (
    <div>
      resultat: <h3>{calculation?.reisefradrag}</h3>
    </div>
  );
}

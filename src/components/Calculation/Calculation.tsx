import React from 'react';

import { useCalculationContext } from '../../context/calculationContext';

export default function Calculation() {
  const { calculation } = useCalculationContext();

  return (
    <div>
      resultat: <h1>{calculation}</h1>
    </div>
  );
}

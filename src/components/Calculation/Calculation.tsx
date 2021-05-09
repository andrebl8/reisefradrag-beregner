import React from 'react';

import { useCalculationContext } from '../../context/calculationContext';
import Card from '../Card/Card';
import './style.scss';

export default function Calculation() {
  const { calculation } = useCalculationContext();

  return (
    <div className="calculatonResultWrapper">
      {calculation?.reisefradrag && (
        <Card>
          <h2>Beregnet reisefradrag:</h2>
          Du kan føre:
          <h3>{calculation?.reisefradrag} kr</h3>
        </Card>
      )}
    </div>
  );
}

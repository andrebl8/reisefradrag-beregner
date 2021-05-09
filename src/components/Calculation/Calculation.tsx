import React from 'react';

import { useCalculationContext } from '../../context/calculationContext';
import Card from '../Card/Card';
import './style.scss';

export default function Calculation() {
  const { calculation } = useCalculationContext();

  return (
    <div className="calculatonResultWrapper">
      <Card>
        resultat: <h3>{calculation?.reisefradrag}</h3>
      </Card>
    </div>
  );
}

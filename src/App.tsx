import React, { useState } from 'react';

import Calculation from './components/Calculation/Calculation';
import FormContainer from './components/Form/FormContainer';
import Header from './components/header/Header';
import { CalculationContext } from './context/calculationContext';

import './App.scss';
import { IReisefradrag } from './interfaces/IReisefradrag';

function App() {
  // TODO Fix any type
  const [calculation, setCalculation] = useState<IReisefradrag>(
    {} as IReisefradrag
  );

  return (
    <div className="App">
      <Header />
      <CalculationContext.Provider value={{ calculation, setCalculation }}>
        <FormContainer />
        <Calculation />
      </CalculationContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';

import FormContainer from './components/Form/FormContainer';
import Header from './components/header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <FormContainer />
    </div>
  );
}

export default App;

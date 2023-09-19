import './App.css';
import React from 'react';
import Toggle from './lib/components/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle text='Theme' handleChange={function () {
        throw new Error('Function not implemented.');
      } }/>
      <Toggle text='Time' handleChange={function () { throw new Error('Function not implemented.');
      } }/>
    </div>
  );
}

export default App;

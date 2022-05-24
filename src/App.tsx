import React from 'react';
import './App.css';
import UseEffectCounterReducer from './components/UseEffectCounterReducer';

// import ReducerPizzaCalculator from './components/ReducerPizzaCalculator';
// import UseEffectExcercise from './components/UseEffectExcercise';
// import USNoDefaultValueMovieChar from './components/USNoDefaultValueMovieChar';
// import BoxExample from './components/BoxExample';
// import CommonTypes from './components/CommonTypes';
// import UseStateHook from './components/UseStateHook';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <UseEffectCounterReducer />
        {/* <ReducerPizzaCalculator /> */}
        {/* <UseEffectExcercise /> */}
        {/* <BoxExample /> */}
        {/* <CommonTypes name='tinashe' /> */}
      </div>
    </div>
  );
}

export default App;

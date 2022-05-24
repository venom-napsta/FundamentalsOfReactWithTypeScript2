import { count } from 'console';
import React, { ChangeEvent, useReducer } from 'react'

// type CounterAction = {
//   type: 'INCREMENT' | 'DECREMENT' | 'SET';
//   payload?:number;
// }

type CounterState = {
  value: number;
}

type BasicCounterAction ={
  type: 'INCREMENT' | 'DECREMENT';
}

type SetCounterAction = {
  type: 'SET';
  payload: number;
}
//THEREFORE, either set or counter action
type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state:CounterState, action:CounterAction) =>{
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      }
    case 'DECREMENT':
      return {
        value: state.value - 1
      }
    case 'SET':
      return {
        value: action.payload
      }
    default:
      return state;
  }
}



function UseEffectCounterReducer() {

  const [state, dispatch] = useReducer(reducer, {value: 0})

  const increment = () => dispatch({type: 'INCREMENT'})
  const decrement = () => dispatch({type: 'DECREMENT'})
  const reset = () => dispatch({type: 'SET', payload: 0})
  // const set = (n: number) => dispatch({type: 'SET', payload: n})

  return (
    <main>
      <section>
        <h2>Days Since Last Incident</h2><br /><br />
        <h1>{state.value}</h1>
      </section>
      <section>
        <button onClick={decrement} >Decrement</button>
        <button onClick={reset} >Reset</button>
        <button onClick={increment} >Increment</button>
      </section>
      <section>
        <h6>Set Count</h6>
        <input type="number" name="count" id="set-to" value={state.value} />
      </section>
    </main>
  )
}


export default UseEffectCounterReducer
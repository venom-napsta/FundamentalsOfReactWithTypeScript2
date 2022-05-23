import React, { Dispatch, useReducer } from 'react'

type PizzaData ={
    numberOfPeople: number;
    slicesPerPerson: number;
    slicesPerPie: number;
}

type PizzaState = PizzaData & {
    pizzasNeeded: number;
}

const calcPizzaNeeded = ({
    numberOfPeople,
    slicesPerPerson,
    slicesPerPie }:PizzaData):number =>{
        // u caanot order fraction of a pizza
        return Math.ceil((numberOfPeople * slicesPerPerson)/slicesPerPie)
    };

const addPizzasNeededToPizaData = (data: PizzaData):PizzaState =>{
    return { ...data, pizzasNeeded: calcPizzaNeeded(data)};
}

const initialState: PizzaState = {
    numberOfPeople: 8,
    slicesPerPerson: 2,
    slicesPerPie:8,
    pizzasNeeded:2
}

type PizzaAction ={
  type: 'UPDATE_NUMBER_OF_PEOPLE' | 'UPDATE_SLICES_PER_PERSON' | 'UPDATE_SLICES_PER_PIE',
  payload: number
} // so that if u mispelt/remove action type it will 'red squigly' :)
// Basically when the fields change recalculate
const reducer = (state:PizzaState, action:PizzaAction) =>{
    if(action.type === 'UPDATE_NUMBER_OF_PEOPLE'){
        return addPizzasNeededToPizaData({
            ...state,
            numberOfPeople: action.payload
        })
    }

    if(action.type === 'UPDATE_SLICES_PER_PERSON'){
        return addPizzasNeededToPizaData({
            ...state,
            slicesPerPerson: action.payload
        })
    }

    if(action.type === 'UPDATE_SLICES_PER_PIE'){
        return addPizzasNeededToPizaData({
            ...state,
            slicesPerPie: action.payload
        })
    }
    return state;
}

const Calculation = ({count}:{count:any}) =>{
    return (
        <section className='calculation'>
            <p className='count'>{count}</p>
            <p className='caption'>Pizzas Needed</p>
        </section>
    )
}

const Calculator = ({ dispatch, state}: {state:PizzaState, dispatch:Dispatch<PizzaAction>}) => {
  return (
      <form onSubmit={() => {}}>
          <label htmlFor='number-of-people'>Number of People</label>
          <input type="number" id="number-of-people" value={state.numberOfPeople} 
            onChange={(e) =>
            dispatch({
                type: 'UPDATE_NUMBER_OF_PEOPLE',
                payload: +e.target.value
            })}
          /><br/>
          <label htmlFor='slices-per-person'>Slices Per Person</label>
          <input type="number" id="slices-per-person" value={state.slicesPerPerson} 
            onChange={(e) =>
            dispatch({
                type: 'UPDATE_SLICES_PER_PERSON',
                payload: +e.target.value
            })}
          /><br/>
          <label htmlFor='slices-per-pie'>Slices Per Pie</label>
          <input type="number" id="slices-per-pie" value={state.slicesPerPie} 
            onChange={(e) =>
            dispatch({
                type: 'UPDATE_SLICES_PER_PIE',
                payload: +e.target.value
            })}
          />
      </form>
  )
}

const ReducerPizzaCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <main className="calculator">
      <header>
        <h1>Pizza Calculator</h1>
      </header>
      <Calculation count={state.pizzasNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  )
}

export default ReducerPizzaCalculator
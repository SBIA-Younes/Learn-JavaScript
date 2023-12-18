import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch(action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
        return state - 1;
    case "REINITIALISER":
        return initialState;
    default:
      return state;
      }
}

function Count() {

  const [count, dispath] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button className='btn btn-success m-3' onClick={()=>{dispath('INCREMENT')}}>+</button>
      <button className='btn btn-danger m-3' onClick={()=>{dispath('DECREMENT')}}>-</button>
      <button className='btn btn-warning m-3' onClick={()=>{dispath('REINITIALISER')}}>0</button>
    </div>
  )
}

export default Count
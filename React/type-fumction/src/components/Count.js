import React, { useReducer } from 'react'

const initialState = {
  countOne:0,
  countTwo:0
};

const reducer = (state, action) => {
  console.log(state);
  switch(action.type) {
    case "INCREMENT_One":
      return {...state, countOne: state.countOne + action.value};
    case "DECREMENT_One":
        return {...state, countOne: state.countOne - action.value};
    case "INCREMENT_Two":
      return {...state, countTwo: state.countTwo + action.value};
    case "DECREMENT_Two":
        return {...state, countTwo: state.countTwo - action.value};
    case "REINITIALISER":
        return initialState;
    default:
      return state;
      }
}

function Count() {

  const [count, dispath] = useReducer(reducer, initialState)
  return (
    <div className='row'>
      <div className='col-6 text-center'>
        <h2>Count: {count.countOne}</h2>
        <button className='btn btn-success m-3' onClick={()=>{dispath({type:'INCREMENT_One',value:1})}}>+</button>
        <button className='btn btn-danger m-3' onClick={()=>{dispath({type:'DECREMENT_One',value:1})}}>-</button>
      </div>
      <div className='col-6 text-center'>
        <h2>Count: {count.countTwo}</h2>
        <button className='btn btn-success m-3' onClick={()=>{dispath({type:'INCREMENT_Two',value:10})}}>+</button>
        <button className='btn btn-danger m-3' onClick={()=>{dispath({type:'DECREMENT_Two',value:10})}}>-</button>
      </div>
        <div className='col text-center'>
          <button className='btn btn-warning m-3' onClick={()=>{dispath({type:'REINITIALISER'})}}>0</button>
        </div>
    </div>
  )
}

export default Count
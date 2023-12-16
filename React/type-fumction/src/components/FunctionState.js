
import {useState} from 'react'

function FunctionState() {

  const [counter, setCounter] = useState(0);
  
  const addOne = ()=>{
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <p>Function State : {counter}</p> 

      <button onClick={()=> setCounter(prevCounter => prevCounter + 1)}>State dans uns Fonction</button>
    </div>
  )
}

export default FunctionState
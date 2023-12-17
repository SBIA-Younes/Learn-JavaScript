import {useState, useEffect} from 'react'

function FunctionCount() {
  
  const [count, setCount] = useState(0);

  useEffect(()=>{
    
    setTimeout(()=> {

      document.title = `Functoin vous avez clique ${count} fois`
    }, (5000))

  })

  return (
    <div>
      <p>Function Count : {count} </p>
      <button onClick={()=> setCount(count + 1)}>Click</button>
    </div>
  )
}

export default FunctionCount
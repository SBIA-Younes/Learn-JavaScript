import {useState, useEffect} from 'react'

function FunctionCount() {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(()=>{
    
    // setTimeout(()=> {
      console.log('Mise à jour du titre via useEffect');
      document.title = `Functoin vous avez clique ${count} fois`
    // }, (5000))

  },[])

  return (
    <div>
      <p>Function Count : {count} </p>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={()=> setCount(count + 1)}>Click</button>
    </div>
  )
}

export default FunctionCount
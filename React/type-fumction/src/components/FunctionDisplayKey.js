import {useState, useEffect} from 'react'

function FunctionDisplayKey() {

  const [keyCode, setKeyCode] = useState('')
  
  const handleKeyCode = (event) => {
    setKeyCode(event.code)
  }
useEffect(()=>{
  console.log('addEventListener monter');
  document.addEventListener('keyup', handleKeyCode)
  return ()=>{
    console.log('addEventListener retire');
    document.removeEventListener('keyup', handleKeyCode)
  }
},[])
  return (
    <div className='card'>
    <div className='card-body'>
      <h1 className='text-center'>{keyCode}</h1>
    </div>
  </div>
  )
}

export default FunctionDisplayKey
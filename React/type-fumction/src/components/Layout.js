import React, {useState, useEffect, useLayoutEffect} from 'react'

function Layout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('je suis dans le useEffect 1');
  
    
  }, [count])

  useLayoutEffect(() => {
    console.log('je suis dans le useEffect useLayoutEffect');
  
    
  }, [count])

  // useEffect(() => {
  //   console.log('je suis dans le useEffect 2');
  
    
  // }, [count])
  

  console.log('Render');
  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count +1)}>+1</button>
    </div>
  )
}

export default Layout
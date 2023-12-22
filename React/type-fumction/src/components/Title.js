import {useRef} from 'react'

function Title() {
  console.log('Composent Title Charger ');
  
  const h1Renders = useRef(0);
  
  setInterval(()=>{
    h1Renders.current++
    console.log(h1Renders);
  },1000)

  return (
    <div>
      {h1Renders.current}
    </div>
  )
}

export default Title
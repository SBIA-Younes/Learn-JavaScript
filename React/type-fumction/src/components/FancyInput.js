import React, {useState, useRef} from 'react'

const FancyInput = React.forwardRef((props,ref) => {

    const inputRef = useRef()
    
    const [count, setCount] = useState(0);
    React.useImperativeHandle(ref, ()=>(
      {
        focus: (val)=>{
          if(count===4) {
            const colors = ['red','bleu','orange','green','pink','orange','yellow'];
            const style = `4px solid ${colors[val]}`
            inputRef.current.style.border = style;
          }
        },
        countMax: ()=>{
          if(count <5) {
            setCount(c=> c+1)
          }
        }
      }
    ))
    
    return (
      <div>
        <h1>{count}</h1>
        <input type="text" ref={inputRef}/>
    </div>
  )
}) 

export default FancyInput
import React from 'react'

function Button({handlClick ,btnColor, increment, children}) {
  console.log(`Button ${children}`);
  return (
    <button onClick={()=>handlClick(increment)} className={`btn btn-${btnColor} m-2`}>+{increment} %</button>
  )
}

export default React.memo(Button)
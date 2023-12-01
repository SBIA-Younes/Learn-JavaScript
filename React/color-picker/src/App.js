/* eslint-disable no-console */
import React, { useState } from 'react'
import {SketchPicker} from 'react-color';





export const App = () => {

  const [currentColor, setCurrentColor] = useState()
  const handelOnChamge = (e)=> {
    setCurrentColor(e.target.value)
    console.log(currentColor);
  }

  return (
    <div className='App'>
     
     
    
     <input type="color" onChange={handelOnChamge} value={currentColor ? currentColor : ''} required/>
    
    </div>
  )
}

export default App

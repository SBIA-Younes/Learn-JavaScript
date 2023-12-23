
import { useState, useRef} from 'react';
import FancyInput from './components/FancyInput';
import './App.css'





function App () {
  
  const date = new Date();

  const fancyInputRef = useRef();

  const fancyInput = (val)=>{
  console.log(val);
  console.log(fancyInputRef.current);
  fancyInputRef.current.focus(val);
  fancyInputRef.current.countMax();

}

  return (
    <div className='App'>
    <FancyInput ref={fancyInputRef} />
    <button onClick={()=>fancyInput(date.getDay())}>Cliquer</button>      

    </div>
  );
}

export default App;

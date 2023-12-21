
import { useState, useCallback } from 'react';
import Count from './components/Count';
import Button from './components/Button';


function App () {
  
  const [countOne, setCountOne] = useState({value:0, btnColor:'success',increment:25})
  const [countTwo, setCountTwo] = useState({value:0, btnColor:'danger',increment:20})

  const incrementCountOne = useCallback(
    (val)=> {
      console.log('je suis dans incrementCountOne');
      countOne.value < 100 && setCountOne({...countOne,value: countOne.value + val})
    },[countOne]
  )
  
  const incrementCountTwo = useCallback((val)=> {
    console.log('je suis dans incrementCountTwo');
    countTwo.value < 100 && setCountTwo({...countTwo,value: countTwo.value + val})
  },[countTwo])

  return (
    <div className='container mt-4'>

      <Count text='Count 1' count={countOne.value} bgColor={countOne.btnColor}/>
      <Count text='Count 2' count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button handlClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handlClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
    </div>
  );
}

export default App;

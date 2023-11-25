import Resulta from './Game';
import './App.css';
import Btn from './CustomBtn';


function App() {

  const onClickAlert = () => alert('Hello World')
  return (
    <div className="App">
      <Resulta/>
      <Btn onClick={onClickAlert} styled={{backgroundColor:'yellow', color:'blue'}}>Say Hellow</Btn>
    </div>
  );
}

export default App;

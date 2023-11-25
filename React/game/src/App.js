// import Resulta from './components/Game';
// import Btn from './components/CustomBtn';
import Template from './components/Template';
import Welcome from './components/Welcome';
import Button from './components/Button';

import './App.css';


function App() {

  const onClickAlert = () => alert('Hello World')
  return (
    < >
    <Template></Template>
      <Welcome></Welcome>
      {/* <Resulta/>
      <Btn onClick={onClickAlert} styled={{backgroundColor:'yellow', color:'blue'}}>Say Hellow</Btn> */}
      <Button></Button>

    </>
  );
}

export default App;


import { useState} from 'react';
import './App.css'
import ClickSayHellow from './components/ClickSayHellow';
import MyContatcts from './components/MyContatcts';


function App () {
  
  return (
    <div className='App'>
      <h1>My Contatcts</h1>
      <MyContatcts/>
      {/* <ClickSayHellow /> */}
    
    </div>
  );
}

export default App;


import { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import {UserContext, ColorContext} from './components/MyContext';



class App extends Component {

  state = {
    user: {
      name:'Lisa',
      age:8
    }
  }
  
  render (){
    return (
    <div className='container'>
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={'red'}>
          <Profile/>
        </ColorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}}

export default App;

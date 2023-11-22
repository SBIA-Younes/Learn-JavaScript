
import { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';
import Wrapper from './components/Wrapper';


class App extends Component {

  state = {
    titre: 'Mon catalogue voiture',
    color: 'green'
  }

  render () {

    

    return (
      <div className="App">
        <Mycars title ={this.state.titre} color={this.state.color} />
      </div>
  );
}
}

export default App;

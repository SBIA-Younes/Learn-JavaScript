
import { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import './App.css';


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class App extends Component {

  state = {
    display: true
  }

  clearOrShow = () => {
    this.setState({
      display:!this.state.display
    })
  }

  render() {
    const showComponent = this.state.display ? (<LifeCycle name='Toto 2'/>) : (<div></div>);
  return (
    <div className="App">
      {showComponent}
      <button onClick={this.clearOrShow}>Clique ici</button>
    </div>
  )}
}

export default App;

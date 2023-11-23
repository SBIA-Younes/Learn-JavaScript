
import { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';
import Wrapper from './components/Wrapper';


class App extends Component {

  state = {
    titre: 'Mon catalogue voiture',
  }

  changeTitle = (title) =>{
    this.setState({titre:title})
  }

  changeViaBind = (param) => {
    this.setState({titre:param})
  }

  changeViaInput = (e)=> {
    this.setState({titre:e.target.value})
    
  }

  render () {

    

    return (
      <div className="App">
        <Mycars title ={this.state.titre} color={this.state.color} />
        <button onClick={()=> this.changeTitle('Mon Nouveau Titre')}>Changer le nom en dur</button>
        <button onClick={this.changeViaBind.bind(this,'Change titre via bind')}>Via Bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>

  );
}
}

export default App;

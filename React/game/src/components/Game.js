import { Component } from "react";
import Btn from "./CustomBtn";
// import stayled from 'styled-components'



class Resulta extends Component {
  state = {
    name: 'Mario',
    winner: true
  }
  changeState = () => this.setState({winner: !this.state.winner})

  ;  render () {
    const clqssColor = this.state.winner ? 'alert-success' : 'alert-danger';

    const succes = {
      backgroundColor: 'green',
      color: 'black',
    }
    const danger = {
      backgroundColor: 'red',
      borderRadius: '20px',
    }

    return (
      <div className="container">
        
        <div className={`alert ${clqssColor}`} role="alert">
          {this.state.winner ?`Bravo ${this.state.name}` : 'Rate 3!'} 
        </div> 
     
        <button onClick={this.changeState} className="btn btn-warning">
          Change state
        </button>
  
        <Btn styled={succes} onClick={this.changeState}>Block</Btn>
        <Btn styled={danger}>Click ici</Btn>
        <Btn styled={{backgroundColor:'blue'}}>Block</Btn>

      </div>
    )
  }

}

export default Resulta
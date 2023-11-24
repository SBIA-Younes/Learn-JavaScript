import { Component } from "react";
import CustomBtn from "./CustomBtn";
// import stayled from 'styled-components'



class Resulta extends Component {
  state = {
    name: 'Mario',
    winner: true
  }

  render () {
    return (
      <div>
        {this.state.winner ?
        <h2 className="alert alert-success"  role="alert">Winner {this.state.name}</h2> :
        <h2 className="alert alert-danger"  role="alert">Rate 3!</h2>
      }
        <button onClick={() => this.setState({winner:!this.state.winner})} className="btn btn-warning">Change state</button>
        <br/>
        <CustomBtn backgroundColor='green' >Block</CustomBtn>
        <CustomBtn backgroundColor='red'borderRadius='25px'>Click ici</CustomBtn>
        <CustomBtn backgroundColor='blue'>Block</CustomBtn>

      </div>
    )
  }

}

export default Resulta
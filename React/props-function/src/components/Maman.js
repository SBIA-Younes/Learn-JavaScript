import { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {

  state = {
    messageMaman: null,
    messageToto: null,
    didabled: true
  }

    // this.setState({
    //   messageMaman: "Hello Maman"
    // })

  ordreMaman = (msg) => {
    this.setState({
      messageMaman: msg,
      didabled: false
    })
  }

  reponseToto = (msg) =>  this.setState({ messageToto: msg})

  render () {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={()=> this.ordreMaman("Va ranger ta chambre")}>Ordre de la mere</button>
        <p>{this.state.messageMaman}</p>
        <hr/>
        <Toto name='Toto' leState={this.state} reponseTotoProps={this.reponseToto}></Toto>

      </div>
    );
  }
}


export default Maman
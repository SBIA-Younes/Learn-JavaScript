import { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegeta: 100,
      goku: 100,
    };
  }

  reduceLife = (param, param2) => {
    if (param=='Goku') {
      this.setState(prevState => {
        return {
          vegeta: prevState.vegeta - param2,
        };
      });
    } else {
      this.setState(prevState => {
        return {
          goku: prevState.goku - param2,
        };
      });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />

        <div className="row">
          <Vegeta
            name="Vegeta"
            life={this.state.vegeta}
            reduceHandeler={this.reduceLife}
          />
          <Goku
            name="Goku"
            life={this.state.goku}
            reduceHandeler={this.reduceLife}
          />
        </div>
      </div>
    );
  }
}

export default App;

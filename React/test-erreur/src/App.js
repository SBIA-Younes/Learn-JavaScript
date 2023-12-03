import { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import AddHits from "./components/AddHits";



class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Vegeta Vs goku</h1>
        <hr />
        <div className="row">
          <AddHits 
          render={(hits,addOne, saiyen)=>{
           return saiyen.Vegeta && <Vegeta hits={hits} addOne={addOne} name='Vegeta' />
          }}
          />
          <AddHits 
          render={(hits,addOne, saiyen)=>{
           return saiyen.Goku && <Goku hits={hits} addOne={addOne} name='Goku' />
          }}
          />
          
        </div>
      </div>
    );
  }
}

export default App;

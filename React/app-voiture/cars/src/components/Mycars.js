import { Component } from "react";
import Cars from './Cars';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
  
  noCopy = ()=> {
    alert('merci de ne pas copier le texte');
  }

 

  state = {
    cars: ['Ford','Peaugeo', 'Mercedes']
  }
  
  render() {
    // console.log(this.props);
    const {title} = this.props; // Destructurieng
    return (
      <div>
        <h1> {this.props.title} </h1>

        <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <Cars color='Red' marque={this.state.cars[0]}></Cars>
        <Cars  proprietaire='Younes' marque={this.state.cars[1]}></Cars>
        <Cars proprietaire='Ibrahim' color='Green' marque={this.state.cars[2]}></Cars>
      </div>
    );
  }
}

export default Mycars;
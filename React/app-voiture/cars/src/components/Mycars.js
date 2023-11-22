import { Component } from "react";
import Cars from './Cars';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
  state = {
    cars: ['Ford','Peaugeo', 'Mercedes']
  }
  
  render() {
    console.log(this.props);
    const {title} = this.props; // Destructurieng
    const {color} = this.props; // Destructurieng
    return (
      <div>
        {/* <h1> {this.props.title} </h1> */}
        <Wrapper style={{color:color}}> {title} </Wrapper>
        {/* <MyHeader color={color}> {title} </MyHeader> */}
        <Cars color='Red' marque={this.state.cars[0]}></Cars>
        <Cars  proprietaire='Younes' marque={this.state.cars[1]}></Cars>
        <Cars proprietaire='Ibrahim' color='Green' marque={this.state.cars[2]}></Cars>
      </div>
    );
  }
}

export default Mycars;
import React, { Component } from "react";
import goku from "../Goku.png";

class Goku extends Component {
  
  state = {
    bg:''
  }

  handleClick = () =>{
    this.setState({
      bg:'bg-success'
    })
  }

  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={goku} alt="goku" style={{ height: "400px" }} />
        <br />
      </div>
    );
  }
}

export default Goku;

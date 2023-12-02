import React, { Component } from "react";
import frieza from "../frieza.png";

class Frieza extends Component {


  state = {
    bg:''
  }

  handleClick = () =>{
    this.setState({
      bg:'bg-danger'
    })
  }

  render() {
    if(this.state.bg==='bg-danger'){
      throw new Error()
    }

    return (
      <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={frieza} alt="frieza" style={{ height: "400px" }} />
        <br />
      </div>
    );
  }
}

export default Frieza;

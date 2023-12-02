import React, { Component } from "react";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {

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
        <img onClick={this.handleClick} src={vegeta} alt="vegeta" style={{ height: "400px" }} />
        <br />
      </div>
    );
  }
}

export default Vegeta;

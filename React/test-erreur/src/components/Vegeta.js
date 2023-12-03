import React, { Component } from "react";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {


  
  render() {

    const {hits, addOne, name} = this.props
    return (
      <div className={`col `}>
        <img  src={vegeta} alt="vegeta" style={{ height: "400px" }} />
        <br />
      <button onClick={addOne} className="btn btn-success m-3" >
        {name} Fraper
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Coups</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>

          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default Vegeta;

import React, { Component } from "react";
import goku from "../Goku.png";

class Goku extends Component {

 
  
 
  render() {
    const {hits, addOne,name} = this.props
    return (
      <div className="col">
      <img src={goku} alt="goku" style={{ height: "400px" }} />
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

export default Goku;

import React, { Component } from "react";
import vegeta from "../Vegeta.png";
import countHits from "./countHits";


class Vegeta extends Component {
  render() {
    const { name, addOneHits, hocState, life } = this.props;
    let className = "";
    let textBtn = "";
    let OnClick;
    if (hocState.isDead) {
      console.log('winner Vegeta');
      className = "btn btn-success m-3 disabled";
      textBtn = "Winner";
      OnClick = () => {};
    }

    const lifeValue =
      life > 0 ? life + " %" : <span className="badge badge-danger">Mort</span>;
    if (life > 0) {
      className = "btn btn-success m-3";
      textBtn = `${name} Frappe`;
      OnClick =addOneHits
    } else {
      className = "btn btn-danger m-3 disabled";
      textBtn = "Mort";
      OnClick = ()=>{}
    }

    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" style={{ height: "400px" }} />
        <br />
        <button onClick={OnClick} className={className}>
          {textBtn}
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Coups</th>
              <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              <td>{lifeValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta, 10);

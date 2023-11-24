import { Component } from "react";
import Car from "./Car";

class Form extends Component {

  state = {
    username: '',
    color: '',
    colors: ['', 'red', 'blue', 'orange','green', 'pink'],
    comment:''
  }

  hendlPseudo = e => {
    this.setState({username: e.target.value});
    
  }

  handlColor = e => {
    this.setState({color: e.target.value});
  }

  handlComment = e => {
    this.setState({comment: e.target.value})
  }

  render() {
    return (
    <div>
      <Car color={this.state.color} height='400'/>
      <h1>Commentaire</h1>
      <form action="" onSubmit={(e)=>e.preventDefault()} >
        <div>
          <label > Pseudo : </label>
          <input type="text" value={this.state.username} onChange={this.hendlPseudo}/>
        </div>
        <div>
          <label >couleur</label>
          <select value={this.state.color} onChange={this.handlColor} >
            {this.state.colors.map((color, index) => <option key={index} value={color}>{color}</option>)}
          </select>
        </div>
        <div>
          <p>{this.state.comment}</p>
          <textarea   onChange={this.handlComment}></textarea>
        </div>
        <input type="submit" value="submit"/>
      </form>
    </div>
    )
  }
}

export default Form;
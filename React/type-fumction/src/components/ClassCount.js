
import React, { Component } from 'react'

 class ClassCount extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
    }
  }
  componentDidMount() { 
    console.log('Je suis dans CMD');
    document.title = `Class Vous avez clique ${this.state.count} fois`
    }
    
  componentDidUpdate(prevProps, prevState) {
    console.log('Je suis dans componentDidUpdate');
    if (this.state.count !== prevState.counte){
      document.title = `Class Vous avez cliqué ${this.state.count} fois`;
      }
  }

  render() {
    return (
      <div>
        <p>Class Count : {this.state.count}</p>
        <button onClick={()=>this.setState({count : this.state.count + 1})} >Counter</button>
      </div>
    )
  }
}

export default ClassCount

import React, { Component } from 'react'

 class ClassCount extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
      name: ''
    }
  }
  componentDidMount() { 
    console.log('Je suis dans CMD');
    document.title = `Class Vous avez clique ${this.state.count} fois`
    }
    
  componentDidUpdate(prevProps, prevState) {
    console.log('Je suis dans componentDidUpdate');
    if (this.state.count !== prevState.counte){
      console.log('Update Title');
      document.title = `Class Vous avez cliqué ${this.state.count} fois`;
      }
  }

  render() {
    return (
      <div>
        <p>Class Count : {this.state.count}</p>
        <button onClick={()=>this.setState({count : this.state.count + 1})} >Counter</button>
        
        <input type="text" value={this.state.name} onChange={e => {
          this.setState({ name : e.target.value })
        }}/>

      </div>
    )
  }
}

export default ClassCount
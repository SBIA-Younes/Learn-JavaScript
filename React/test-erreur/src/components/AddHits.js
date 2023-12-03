



import React, { Component } from 'react'

class AddHits extends Component {
  
  state = {
    fighters:{
      Vegeta:true,
      Goku:true
    },
    hits:0
  }

  addOne = () =>{
    this.setState(prevState => {
      return {
        hits: prevState.hits + 1
      }
    })
  }

  render() {
    return (
      <>
        {this.props.render(this.state.hits, this.addOne, this.state.fighters)}
      </>
    )
  }
}

export default AddHits;
import React, { Component } from 'react'

export class ClassDisplayKey extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       keyCode: null,
    }
  }

   handleKeyCode = (event) => {
    this.setState(presvState => {
      if (presvState !=this.state.keyCode) {
        return {keyCode : event.code}
      }
    })
  }

  componentDidMount() { 
    document.addEventListener('keyup', this.handleKeyCode)
  }
  
  
  componentWillUnmount() {
    console.log('je suis dqns le componentDidUnmount')
    document.removeEventListener('keyup', this.handleKeyCode)
    
    }

  
  render() {
    const {keyCode} = this.state;

    return (
      <div className='card'>
        <div className='card-body'>
          <h1 className='text-center'>{keyCode}</h1>
        </div>
      </div>
    )
  }
}

export default ClassDisplayKey
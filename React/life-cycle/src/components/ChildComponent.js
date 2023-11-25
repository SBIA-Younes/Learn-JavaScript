import { Component } from 'react'

export class ChildComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
    console.log(` je suis dans le constructor() ENFANT`);
  }

  componentDidMount() {
    console.log(` je suis dans le componentDidMount() ENFANT`);
  }

  render() {
    console.log(` je suis dans le render() ENFANT`);
    return (
      <div>
        {console.log(` Mise a jour DOM dans component ENFANT`)}
        
        <p>ChildComponent Component</p>
      </div>
    )
  }
}

export default ChildComponent
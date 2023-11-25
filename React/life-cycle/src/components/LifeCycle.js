import { Component } from 'react'
import ChildComponent from './ChildComponent';

class LifeCycle extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name:'Toto',
      step:1
    }

    console.log(`Etape ${this.state.step} : je suis dans le constructor()`);
  }

  componentDidMount() { 
    console.log(`Etape ${this.state.step} : je suis dans le componentDidMount()`);
    // this.setState({step:this.state.step+1})
    this.setState((prevState) => ({
      step: prevState.step + 1,
      name: this.props.name
    })
    )
    
    console.log(`Etape ${this.state.step} : setState() a change le state dans le componentDidMount()`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Etape ${this.state.step} : je suis dans le componentDidUpdate()`);
    console.log(prevState);
    console.log(this.state);
  }

  render() {
  console.log(`Etape ${this.state.step} : je suis dans le render()`);
  return (
    <div>
       {console.log(`Etape ${this.state.step} : Mise a jour DOM`)}
        <p>Chargement : {this.state.step}</p>
        <p>Nom : {this.state.name}</p>

        <ChildComponent/>
      </div>
    )
  }
}

export default LifeCycle
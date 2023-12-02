import {Component} from 'react'

const countHits = (WrappedComponent, pawor) => { // Note importatnt il fait l'ecrire en majuscule
  class CountHits extends Component {
    
    state = {
      hits:0,
      isDead: false,
    }
    addOne = () => {
      this.setState(presState => {
        return {
          hits: presState.hits + 1,
        }
      })
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate', prevProps, prevState);
      if (this.props.life <= 0 && !prevState.isDead) {
        this.setState({ isDead: true });
      }else if (this.state !== prevState) {
        console.log(prevState);
        const CompName = WrappedComponent.name;
        this.props.reduceHandeler(CompName, pawor);
        
      }
    }
  

    render() {
      
      return <WrappedComponent  addOneHits={this.addOne}
      hocState={this.state} {...this.props} />
    }
  }
  return CountHits
}

export default countHits;
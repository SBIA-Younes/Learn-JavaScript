import './App.css';
import Docs from './Components/Docs';
import Tutorials from './Components/Tutorials';
import Community from './Components/Community';
import ErrorPage from './Components/ErrorPage';
import Menu from './Components/Menu';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      underConst:{
        Docs:false,
        Tutorials:true,
        Community:false,
        ErrorPage:false
      }
    }
  }
  render() {

    return (
      <BrowserRouter >
    <Menu/>
    <Switch>
      <Route exact  path="/" component={Docs}/>
      <Route exact path="/tutorial" component={Tutorials}/>
      {/* <Route path="/tutorial" render={()=>{
        this.state.underConst.Tutorials ?(<Redirect to='/'/>) : (<Tutorials/>)
      }}/> */}
      <Route exact path="/community" component={Community}/>
      <Route  component={ErrorPage}/>
    </Switch>
   
    </BrowserRouter>
  );
}
}

export default App;

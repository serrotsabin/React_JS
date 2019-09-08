import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'
import NotFound from './components/NotFound'
class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path='/'  component = {Home}/>
      <Route path='/about' component={About}/>
      <Route exact path ='/users' component={Users}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
      </Router>
      
    )
  }
}
export default App;

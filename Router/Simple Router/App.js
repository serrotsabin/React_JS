import React from 'react';
import './App.css';

import About from './components/About';
import Shop from './components/Shop';
import Nav  from './components/nav';

import {BrowserRouter as Router , Route,} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <Nav />
        <Route path = "/" exact component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path = '/shop' component = {Shop}/>
        </Router>
      </div>
    )
  }
}
class Home extends React.Component{
  componentWillMount(){
    alert('Mounting Home')
  }
  componentWillUnmount(){
    alert("Home Unmounted")
  }
  render(){
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}
export default App;

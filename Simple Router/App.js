import React from 'react';
import {Link, Route,Switch } from 'react-router-dom';

const Course = ({match})=>{
  return(
    <div>{match.params.course}</div>
  )
}
const Courses = ({match})=>{
  return(
    <div>
      <h1>Courses</h1>
      <ul>
          <Link to={`${match.url}/1`}><li>Course 1</li></Link>
          <Link to={`${match.url}/2`}><li>Course 2</li></Link>
          <Link to={`${match.url}/3`}><li>Course 3</li></Link>
        </ul>
        
        <Route path = {`${match.path}/:course`} component={Course}/>
        
    </div>
  )
}

const Home = ()=>{
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

const About = ()=>{
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}

class App extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/courses'><li>Courses</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
        <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/courses' component = {Courses} />
        <Route path = '/about' component = {About} />
        </Switch>
      </div>
    )
  }
}
export default App
import React from 'react'
import Http from './ButtonError/Original'
import {BrowserRouter, Route, Link} from 'react-router-dom' 
import ErrorBoundary from './ErrorBoundary';

const A = ()=>(
  <div></div>
)
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <ErrorBoundary>
      <nav>
      <ul>
      <li><Link to="/" >Home</Link></li>
          <li><Link to="/error" >Erro</Link></li>
          <li><Link to="/http" >Http</Link></li>
        </ul>
        </nav>
          <Route  exact path="/" component ={A} />
          <Route  path="/error" component ={Errocomp} />
          <Route  path="/http" component ={Http} />
      </ErrorBoundary>
      </BrowserRouter>
      )
  }
}
const Errocomp = (props)=>(
  <div>
        <Comp />
        <Comp/>
  </div>
    
)

class Comp extends React.Component{
  constructor(props){
    super(props)
    this.state = {error:false}
  }
  
  handleClick = () =>{
    this.setState({
      error: true
    })
  }
  
  render(){
    if(this.state.error)
    {this.state.ss.map(err=>err)}else{
      return(
        <div>
        <button onClick={this.handleClick}>Button</button>
        <h1>Button</h1>
        </div>
      )
    }
 }
}


export default App;

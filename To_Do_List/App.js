import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          title: 'Take Out Trash',
          completed: false
        },
        {
          title: 'Complete Assignment',
          completed: false
        },
        {
          title: 'Prepare For Final',
          completed: false
        }
      ],
      count: 2,
      currnet: ''
    }
    this.inputChange = this.inputChange.bind(this)
    this.markComplete = this.markComplete.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }
  inputChange(e){
    const val = e.target.value;
    this.setState({
      current: val
    })
  }
  addTodo(){
    const val = this.state.current;
    const count = this.state.count+1;
    const obj = this.state.todos.slice();
    obj[count]= {
      title: val,
      completed: false
    }
    this.setState({
      count: count,
      todos: obj
    })
  }
  markComplete(v){
    const obj = this.state.todos.slice();
    obj[v].completed = !obj[v].completed
    this.setState({
      todos: obj
    })
  }
  delTodo(i){
    const obj = this.state.todos.slice();
    const count = this.state.count;
    const newobj = [];
    for (let j = 0 ;j < i; ++j){
      newobj[j] = obj[j];
    }
    for (let j = i ;j < count; ++j){
      newobj[j]= obj[j+1];
    }
    this.setState({
      todos: newobj,
      count: count-1
    })
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div>
            <p style={{
              padding: '10px',
              background: "#f4f4f4",
              display: 'flex'}}>
            <input
            style = {{flex: '10'}} 
            placeholder="Add Todo..."
            type="text" 
            onChange={this.inputChange} /> <button 
            style={btnStyle}
            onClick={this.addTodo}>Submit</button> 
            </p>
          <p style={{
            textAlign: 'center',
            background:'#f4f4f4'}}>{this.state.current}</p>
        </div>
        <Todos
        delTodo = {(i)=>{this.delTodo(i)}} 
        markComplete = {(v)=>{this.markComplete(v)}}
        todos={this.state.todos}/>
      </div>
    );
  }
}

function Header(){
  return(
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}

const headerStyle ={
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
const btnStyle={
  flex: '1',
  background: '#333',
  color: '#fff',
  padding: '5px 10px',
  float: 'right'
}

export default App;

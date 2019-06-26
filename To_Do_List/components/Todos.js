import React from 'react';
import PropTypes from 'prop-types';

import TodoItems from './TodoItems';

export default class Todos extends React.Component{
    render(){
        const todos = this.props.todos.map((todo,step)=>{
            return (
                <TodoItems 
                delTodo = {()=>{this.props.delTodo(step)}}
                markComplete = {()=>{this.props.markComplete(step)}}
                key={step} todo={todo} />
            )
        });
        
        return(
            <div>{todos}</div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
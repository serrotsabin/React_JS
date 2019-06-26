import React from 'react';
import PropTypes from 'prop-types';
export default class TodoItems extends React.Component{
    getStyle = ()=>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
    }
    render(){
        return(
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete} />{' '}
                {this.props.todo.title}<button
                 style={btnStyle}
                 onClick={this.props.delTodo}>X</button></p>
            </div>
        )
    }
}
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle={
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    float: 'right'
}
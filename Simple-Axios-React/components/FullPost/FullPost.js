import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './FullPost.css';
import axios from '../../axios'
class FullPost extends Component {
    state = {
        loadedPost: null,
        errorCaught: false
    }
    componentDidMount(){
        console.log('Component Mounted')
        axios.get(`/posts/${this.props.match.params.id}`)
        .then(res=>{
            console.log(res)
            this.setState({
                loadedPost: res.data,
                errorCaught: false
            })
        })
        .catch(err=>{
            this.setState({
                errorCaught: true
            })
        }    )         
}

    handleDelelte = ()=>{
        axios.delete(`/posts/${this.props.match.params.id}`)
        .then(res=>{
            console.log(res)
        })
    }
    render () {
        console.log(this.props)
        if(this.state.errorCaught){
            throw new Error ('Not Loaded')
        }

        let post = (<p>Loading</p>)
        
        if(this.state.loadedPost){
             post = (<div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                        onClick={this.handleDelelte} 
                        className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        if(post){
        return post}else{
        return  null}
    }
}

export default withRouter(FullPost);
import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import './Blog.css'
import axios from '../../axios'
import NewPost from '../../components/NewPost/NewPost'

import FullPost from '../../components/FullPost/FullPost'
import { Route , Link , withRouter} from 'react-router-dom'

class Blog extends Component{
    render(){
        return(
            <div>
            <header>
                    <nav>
                        <ul>
                            <li><Link to={`${this.props.match.path}/posts`}>Posts</Link></li>
                            <li><Link to={`${this.props.match.path}/new`}>New</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path = {`${this.props.match.path}/posts`} component={Posts} /> 
                <Route path = {`${this.props.match.path}/new`} component={NewPost} /> 
                <Route path={`${this.props.match.path}/posts/:id`} component={FullPost} />
            </div>
        )
        
    }
}

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('/posts')
        .then(res=>{
            const posts = res.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return{
                    ...post,
                    author:'Max'
                }
            })
            this.setState({
                posts: updatedPosts
            })
        }).catch(err=>{
            console.log(err)
        })
    }
        
    render () {
        const posts = this.state.posts.map(post =>{
            return(
                <Post 
                key={post.id} 
                id={post.id}
                author={post.author}
                title={post.title} />
            )
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>                
            </div>
        );
    }
}

export default withRouter(Blog);
import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div style={{
                display: 'flex'
            }}>
                <Link
                 style={{
                    color: 'black',
                     textDecoration: 'none'
                 }}
                 to='./'><h2>My Page</h2></Link>
                <ul style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    listStyle: 'none'
                }}>
                    <Link
                     style={{
                        color: 'black', 
                        textDecoration: 'none'
                     }}
                     to='./users'><li>Users</li></Link>
                    <Link 
                    style={{
                        color: 'black',
                        textDecoration: 'none'
                    }}
                    to='./about'><li>About</li></Link>
                </ul>
            </div>
        )
    }
}

export default Nav
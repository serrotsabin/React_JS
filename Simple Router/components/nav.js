import React from 'react';
import {Link} from 'react-router-dom';

export const navStyle={
    color: 'white',
    textDecoration: 'none'
}
const Nav = ()=>{
    return(
        <nav>
            <Link style={navStyle} to='/'><h1>Logo</h1></Link>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'><li>About</li></Link>
            <Link style={navStyle} to='/shop'><li>Shop</li></Link>
        </ul>
        </nav>
    )
}

export default Nav
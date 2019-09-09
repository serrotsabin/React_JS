import React from 'react';
import {withRouter,Link} from 'react-router-dom';

import './Post.css';

const post = (props) => {
return(  <div>
     
    <article 
    onClick={props.onClick}
    className="Post">
        <Link to={`${props.match.path}/${props.id}`}>
        <h1>{props.title}</h1>
        </Link>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    </div>
);
}

export default withRouter(post);
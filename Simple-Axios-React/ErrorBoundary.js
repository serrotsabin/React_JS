import React from 'react';
import {withRouter} from 'react-router-dom';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { error: null, errorInfo: null, refresh:null }  
    }
    
    componentDidCatch(error, info){
        this.setState({ error: error, errorInfo: info })
    }

    refreshHandler=()=>{
      this.setState({
        error: null,
        errorInfo: null,
        refresh: true
      })
    }
    goBackHandler = ()=>{
      this.setState({
        error: null,
        errorInfo: null,
        refresh: true
      })
      this.props.history.goBack()
    }
    render() {
        // let link = this.props.location.pathname.split('/')
        // let finalLink =''
        // for(let i=1; i<link.length-1;++i){
        //   finalLink=finalLink+"/"+link[i]
        // }
        // if (finalLink===''){
        //   finalLink = '/'
        // }
        console.log(this.props)
        if(this.state.errorInfo){
            return (
                <div className="error-boundary">
                    <summary>Something went wrong</summary>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        { this.state.error && this.state.error.toString() }
                        { this.state.errorInfo.componentStack }
                    </details>
                    <hr/>
                    <button onClick={this.refreshHandler}>Refresh</button>
                    <button
                    onClick={this.goBackHandler}
                    >Go To Previous Page</button>
                </div>
            )
        }
        return this.props.children
    }
}

export default withRouter(ErrorBoundary);
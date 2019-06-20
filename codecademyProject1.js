import React from 'react';
import ReactDOM from 'react-dom';


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      password: 'swordfish',
      authorized: false,
    };
    this.authorize = this.authorize.bind(this)
  }

  authorize(e) {
  const password = e.target.querySelector(
    'input[type="password"]').value;
  const auth = (password == this.state.password);
  this.setState({
    authorized: auth
  });
}
    render(){
      const login = (<form onSubmit={this.authorize}
        action="#">
          <input type="password" placeholder="password" />
          <input type="submit"/>
        </form>)
      const contactInfo = (
        <ul>
          <li>cliet@example.com</li>
          <li>555.555.5555</li>
        </ul>
      )
      return(
        <div>
          <h1>{this.state.authorized?'Contact':'Enter the Password'}</h1>
          <div>{this.state.authorized?contactInfo:login}</div>
        </div>
      );
    }
}

ReactDOM.render(<Contact />,
  document.getElementById('root'))

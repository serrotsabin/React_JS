import React from 'react';
import ReactDOM from 'react-dom';

class Random extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     color: [0, 200, 0]
   }
   this.handleClick=this.handleClick.bind(this)
 }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleClick(){
    this.setState({
      color: this.chooseColor()
    })
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button onClick={this.handleClick}
        light={this.isLight()} />
      </div>
    );
  }
}

class Button extends React.Component {
	render() {
		return (
			<button
        onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}

ReactDOM.render(
  <Random />,
  document.getElementById('root')
);

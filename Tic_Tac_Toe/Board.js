import React from 'react';

import {Square} from './Square.js';


export class Board extends React.Component{
  renderSquare(i){
    return(
      <Square
      buttonName = {this.props.squares[i]}
      onClick = {()=>this.props.onClick(i)}/>
    );
  }
  renderBoards(){

    let cells = [];
    let rows = [];
    let num = 0;

    for(let i = 0; i < 3 ; i++){
      for (let j = 0; j<3 ; j++ ){
        cells.push(this.renderSquare(num));
        num++
      }
      rows.push(<div key={i} className="board-row">{cells}</div>)
      cells = [];
    }
    return(
      <div>{rows}</div>
    )
  }
  render() {
    return (
      <div>
       {this.renderBoards()}
      </div>
    );
  }
}

import React from 'react';

import {Board} from './Board.js';

export class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // histroy: [{
      //   squares: Array(9).fill(null)
      // }],
      histroy:[{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }
  handleClick(i){
    const histroy = this.state.histroy.slice(0,this.state.stepNumber + 1);
    const current = histroy[histroy.length - 1];
    const squares= current.squares.slice();
    const winner = this.calculateWinner(squares);
    if ((winner || squares[i])){
      return;
    }
    let status = this.state.xIsNext?'X':'O'
    squares[i] = status;
    this.setState({
      xIsNext: !this.state.xIsNext,
      histroy: histroy.concat({
        squares: squares
      }),
      stepNumber: histroy.length,
    })
  }
  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step%2)? 'X':'Y',
    })
  }
  toggleBack(){
    if(this.state.histroy[this.state.stepNumber-1])
      {this.setState({
      stepNumber: this.state.stepNumber -1,
      xIsNext: !this.state.xIsNext,
      })
    }
    else{return}
  }
  toggleNext(){
    if(this.state.histroy[this.state.stepNumber+1])
      {this.setState({
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext,
      })
    }
    else{return}
  }
  render(){
    const histroy = this.state.histroy;
    const current = histroy[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    // const moves = histroy.map((step,move)=>{
    //       const desc = move? 'Go to move #'+ move:'Go to game start';
    //       return(
    //         <li key={move}>
    //           <button onClick={()=>this.jumpTo(move)}>{desc}</button>
    //         </li>
    //       );
    //     });
    const moves= histroy.map((step,move)=>{
      const desc = move? `Goto Move ${move}`:'Start';
      if(move===this.state.stepNumber){
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}><b>{desc}</b></button>
        </li>
      )
    }else{
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      )
    }
    })

    const dis= histroy.map((step,move,histroy)=>{
      const current = histroy[move];
      return(
        <div className="board-space"
        key={move}>
        <Board
        squares={current.squares}
        onClick={()=>{}}/>
        <div>Move {move} </div>
        </div>
      )
    })

    let status
    if(winner){
      status = `Winner ${winner}`
    }
    else{
      status = `Turn ${this.state.xIsNext?'X':'O'}`
    }
    return(
      <div>
        <h1>Tic Tac Toe Game</h1>
        <div className="game">
          <div>
            <Board
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div className="game">
              <button onClick={()=>this.toggleBack()}>Back</button>
              <button onClick={()=>this.toggleNext()}>Next</button>
            </div>
            <h2 className="game">{status}</h2>
            <ol>{moves}</ol>
          </div>
        </div>
        <div> Histroy Of Moves </div>
        <div className="game">{dis}</div>
      </div>
    );
  }
  calculateWinner(squares){
    const lines= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i=0; i<lines.length; i++){
      let [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
    }
    return null;
}
}
}

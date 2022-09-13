import React from "react";
import Board from "./board";
import CalculateWinner from "./components/CalculateWinner/CalculateWinner";

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares : Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }
  handleclick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    console.log(current);
    const squares = current.squares.slice();
        if(CalculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
          }]),
            xIsNext: !this.state.xIsNext,
        })
  }
    render(){
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = CalculateWinner(current.squares);

      let status;
      if(winner){
        status = `Winner ${winner}`;
      }else{
        status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
      }
        return (
          <div className="game">
            <div className="game-board">
                <Board 
                  squares = {current.squares}
                  onClick={(i)=> this.handleclick(i)}
                />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{}</ol>
            </div>
          </div>  
        );
    }
}

export default Game;
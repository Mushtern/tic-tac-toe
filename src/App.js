import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import Square from './Components/Square';
import {WinningPatterns} from './WinningPatterns'


function App() {

  const [board, setBoard] = useState(["", "", "","", "", "","", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({winner: '', state: ''});

  useEffect (() => {
    checkWin();
    checkTie();
  }, [board]);

  useEffect (() => {
    if(result.state !== '' && result.state !== 'Tie') alert(`Game over! ${result.winner} won.`);
    else if (result.state !== '' && result.state !== 'Win') alert(`Game over! It's a tie!`);
    restart();
  }, [result]);

  const chooseSquare = (index) => { //square is the index of each square
    setBoard(board.map((val, idx) => {
      if (idx  === index && val === ""){ //This lets us only return the player on empty squares.
        return player; //We set the element selected to the player.
      }
      return val;
    }));

    board.map((val, idx) => {
      if(idx === index && val === "" && player === "X"){
        setPlayer("O");
      }

      else if (idx === index && val === "" && player === "O"){
        setPlayer("X");
      }
    })
  }

  const checkWin = () => {
    WinningPatterns.forEach((pattern => {
      const firstPlayer = board[pattern[0]];
      if(firstPlayer === "") return;
      let someoneWon = true;
      pattern.forEach((index => {
        if(board[index] !== firstPlayer){
          someoneWon = false;
        }
      }))

      if(someoneWon === true){
        //Someone won.
        setResult({winner: firstPlayer, state: "Win"});
      }
    }))
  }

  const checkTie = () => {
    let boardFilled = true;
    board.forEach((square) => {
      if(square === ""){
        boardFilled = false;
      }
    })

    if(boardFilled){
      setResult({winner: 'No one', state: 'Tie'});
    }
  }

  const restart = () => {
    setBoard(["", "", "","", "", "","", "", ""]);
    setPlayer("X");
  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val = {board[0]} chooseSquare = {() => {chooseSquare(0);}}/>
          <Square val = {board[1]} chooseSquare = {() => {chooseSquare(1);}}/>
          <Square val = {board[2]} chooseSquare = {() => {chooseSquare(2);}}/>
        </div>
        <div className='row'>
          <Square val = {board[3]} chooseSquare = {() => {chooseSquare(3);}}/>
          <Square val = {board[4]} chooseSquare = {() => {chooseSquare(4);}}/>
          <Square val = {board[5]} chooseSquare = {() => {chooseSquare(5);}}/>
        </div>
        <div className='row'>
          <Square val = {board[6]} chooseSquare = {() => {chooseSquare(6);}}/>
          <Square val = {board[7]} chooseSquare = {() => {chooseSquare(7);}}/>
          <Square val = {board[8]} chooseSquare = {() => {chooseSquare(8);}}/>
        </div>
      </div>
    </div>
  );
}

export default App;

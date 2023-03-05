import React from 'react';
import {useState} from 'react'
import './App.css';
import Square from './Components/Square';


function App() {

  const [board, setBoard] = useState(["X", "", "","", "O", "","", "", "X"])

  const chooseSquare = (square) => { //square is the index of each square

  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val = {board[0]} chooseSquare = {() => {chooseSquare(0);}}/>
          <Square val = {board[1]} chooseSquare = {() => {chooseSquare(0);}}/>
          <Square val = {board[2]} chooseSquare = {() => {chooseSquare(0);}}/>
        </div>
        <div className='row'>
          <Square val = {board[3]} chooseSquare = {() => {alert(3)}}/>
          <Square val = {board[4]} chooseSquare = {() => {alert(4)}}/>
          <Square val = {board[5]} chooseSquare = {() => {alert(5)}}/>
        </div>
        <div className='row'>
          <Square val = {board[6]} chooseSquare = {() => {alert(6)}}/>
          <Square val = {board[7]} chooseSquare = {() => {alert(7)}}/>
          <Square val = {board[8]} chooseSquare = {() => {alert(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;

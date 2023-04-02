import React from 'react'
import '../App.css'

const Square = ({val, chooseSquare}) => { //We need the value and a function for when a square is chosen
  return (
    <div className='square' onClick={chooseSquare}>
      {val}
    </div> //When we click on it, we call the function and the value is displayed
  )
}

export default Square

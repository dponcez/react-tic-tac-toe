import React from 'react';
import { Squares } from '../Squares/Squares';
import { checkWinner } from '../../utils/check_winner';
import './Board.css';

const Board = ({xIsNext, squares, onPlay}) => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (i) => {
    if(squares[i] || checkWinner(squares)) return;

    const nextSquare = squares.slice()

    xIsNext ? 
      (nextSquare[i] = 'X') :
      (nextSquare[i] = 'O');

      onPlay(nextSquare)
  }

  const winner = checkWinner(squares)

  let status;

  winner ?
    (status = `Winner: ${winner}`) :
    (status = `Next player: ${xIsNext ? 'X' : 'O'}`)

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='heading'>tic tac toe</h1>
      </header>
      <div className='status'>
        <p className='info'>{status}</p>
      </div>
      <div className='grid'>
        {indices.map(index => (
          <Squares
            key={index} 
            value={squares[index]}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export { Board }
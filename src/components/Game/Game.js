import React, { useState } from 'react';
import { Board } from '../Board/Board';

const Game = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentSquares + 1), nextSquare];
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <div className='game'>
      <div className='game--board'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
    </div>
  )
}

export { Game }
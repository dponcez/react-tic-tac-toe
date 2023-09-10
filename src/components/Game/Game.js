import React, { useState } from 'react';
import { Board } from '../Board/Board';
import { Button  } from '../Button/Button'

const Game = () => {
  const spaces = [Array(9).fill(null)]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState(spaces);
  const xIsNext = currentIndex % 2 === 0;
  const currentSquares = history[currentIndex];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentSquares + 1), nextSquare];
    setHistory(nextHistory)
    setCurrentIndex(nextHistory.length - 1);
  }

  const jumpToNext = (nextMove) => setCurrentIndex(nextMove);

  const moves = history.map((squares, move) => {
    let description;

    move > 0 ? 
      (description = `Go to move: ${move}`) :
      (description = `Go to game start`)

    return (
      <li key={move}>
        <Button
          className="jump"
          value={description}
          onClick={() => jumpToNext(move)}
        />
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game--board'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <ol className="game--list">
        {moves}
      </ol>
    </div>
  )
}

export { Game }
import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  const gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <div>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameBoard;

import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      // Проверяем, есть ли уже ход на этом месте
      for (const turn of prevTurns) {
        if (turn.square.row === rowIndex && turn.square.col === colIndex) {
          return prevTurns;
        }
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      // Переключение игрока
      setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
      return updatedTurns;
    });
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="0" isActive={activePlayer === "0"} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;

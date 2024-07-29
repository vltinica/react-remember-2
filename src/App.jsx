import React from "react";
import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {  

  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "0" : "X")
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="0" isActive={activePlayer === "0"} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;

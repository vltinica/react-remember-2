import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClic = () => {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
  };

  const handleChange = (even) => {setPlayerName(even.target.value)};

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit"

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    // btnCaption = "Save";
  }playerName

  return (
    <>
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClic}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;

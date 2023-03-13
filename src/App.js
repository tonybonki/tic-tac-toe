// Import React
import React from "react";

// Import Use State
import { useState } from "react";

// Board Component
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

// Square Component

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
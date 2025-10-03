import React from "react";

const greetings = ({ btn }) => {
  const players = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Ronaldo" },
  ];
  return (
    <div
      style={{ color: "red", backgroundColor: "green", textAlign: "center" }}
    >
      <h1>This is Greetings Component</h1>
      <button onClick={() => btn({ name: players[1].name })}>Click Me</button>
    </div>
  );
};

export default greetings;

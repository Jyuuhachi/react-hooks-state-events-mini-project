import React from "react";

function Task({category, text, itemid, deleteTask}) {
  return (
    <div className="task" gimme={itemid}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;

import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {

  return (
    <div className="tasks">
      {tasks.map(item => {return(<Task key={item.id} deleteTask={deleteTask} itemid={item.id} category={item.category} text={item.text}/>)})}
    </div>
  );
}

export default TaskList;

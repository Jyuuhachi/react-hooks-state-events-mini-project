import React from "react";

function NewTaskForm({text, categories, category, selected, addTask, setText}) {
  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={setText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={selected} value={category}>
          {categories.map(item => { return(<option value={item}>{item}</option>)})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

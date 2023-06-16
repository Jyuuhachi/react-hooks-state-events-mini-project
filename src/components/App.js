import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as generate} from 'uuid'

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const newTasks = TASKS.map(item => {return({text: item.text, category: item.category, id: generate()})})
  const [tasks, setTasks] = React.useState(newTasks)
  const [category, setCategory] = React.useState("Code")
  const [text, setText] = React.useState("")
  const [filter,setFilter] = React.useState("All")
  const [displayTasks, setDisplayTasks] = React.useState(newTasks)
  const selectableCategories = CATEGORIES.filter(item => {
    if (item === "All") {
      return false
    }
    else {
      return true
    }
  })
  function deleteTask(e) {
    const updatedTasks = tasks.filter(item => {
      if (item.id === e.target.parentNode.getAttribute("gimme")){
        return false
      }
      else {
        return true
      }
    })
    setTasks(updatedTasks)
    setDisplayTasks(updatedTasks.filter(item => {return (filterTasks(item))}))
  }
  function selectedCategory(e){
    setCategory(e.target.value)
  }
  function filterCategories(e) {
    setFilter(e.target.getAttribute("category"))
    const newList = tasks.filter(item => {
      if (e.target.getAttribute("category") === "All") {
        return true
      }
      else {
        if(item.category === e.target.getAttribute("category")) {
          return true
        }
        else {
          return false
        }
    }
    })
    setDisplayTasks(newList)
  }
  function filterTasks(item){
    if (filter === "All"){
      return true
    }
    else{
    if (item.category === filter)  {
      return true
    }
    else {
      return false
    }
  }}
  
  function changeText(e){
    setText(e.target.value)
  }
  function addTask(e) {
    e.preventDefault()
    setText("")
    let task = {id: generate(), text: text, category: category}
    const updatedTasks = [...tasks, task]
    setTasks(updatedTasks)
    setDisplayTasks(updatedTasks.filter(item => {return (filterTasks(item))}))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeFilter={filterCategories} filterTasks={filterTasks} filter={filter}/>
      <NewTaskForm addTask={addTask} categories={selectableCategories} category={category} setText={changeText} text={text} selected={selectedCategory} />
      <TaskList tasks={displayTasks} deleteTask={deleteTask}/>
    </div>
  );
}


export default App;

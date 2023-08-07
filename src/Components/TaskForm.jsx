import React, {useState} from 'react'

//child that will collect information and bring it to Parent(App.jsx)
const TaskForm = (props) => {
  //setting the input that will change:
  const [task, setTask]= useState ("")
 
  const handleSubmit =(e)=>{
    e.preventDefault();
    //sending the new task to the parent (it'll be an object)
    const newTask={
      task, isCompleted:false
    }
    props.onCreate(newTask)
    setTask("")
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Add Task</label>
            <input type="text" value={task} onChange={e=>setTask(e.target.value)}name="task"></input>
            <button type="submit">Add</button>

        </form>
    </div>
  )
}

export default TaskForm
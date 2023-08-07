import React, {useState} from 'react'
import './App.css';
import TaskForm from './Components/TaskForm'
import DisplayList from './Components/DisplayList'

function App() {
  //parent manages the list:
  const[taskList, setTaskList]=useState([])

  //receiving new tasks to the list
  const receiveNewTask=(newTask)=>{
      setTaskList([...taskList, newTask])
  }

  //delete from taskList-you can use array idx, since we don't have the id
  const deleteTaskIdx= (deleteArrIdx) =>{
    const filteredList= taskList.filter((eachTask, idx)=> deleteArrIdx !== idx)
    setTaskList(filteredList);
  }

  //update when taks is completed (toggleCompleted)
  const updateCompletedIdx=(targetIdx, targetBool)=>{
    const updatedList= taskList.map((eachTask, idx)=> {
      if(targetIdx===idx){
        return{...eachTask, isCompleted:targetBool};
      } else {
        return eachTask;
      }
    })
    setTaskList(updatedList);
  }

  return (
    <div>


      <TaskForm onCreate={receiveNewTask}/>

      <DisplayList taskList={taskList} 
      onDelete={deleteTaskIdx}
      updateCompletedIdx={updateCompletedIdx}/>

    </div>
  );
}

export default App;

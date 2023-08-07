import React from 'react'

const DisplayList = (props) => {
    //the checkbox will be set to default false
  // const [completion, setCompletion]=useState(false)

  const handleDelete=(arrIdx) => {
    props.onDelete(arrIdx)
  }

  const toggleCompleted=(arrIdx, targetBool)=>{
    props.updateCompletedIdx (arrIdx, targetBool)
  }

  return (
    <div>
        <h3>Things to do:</h3>
          <ul>
            {
              props.taskList.map((eachTask, idx)=>
              <li key={idx} style={eachTask.isCompleted?{textDecoration:"line-through"}:{}} > 
                {eachTask.task}
                <input type="checkbox"  checked={eachTask.isCompleted} 
                onChange={e=>toggleCompleted(idx, e.target.checked)}></input>
                <button onClick={()=>handleDelete(idx)}>Delete</button>
              </li>
              )
            }
          </ul>

    </div>
  )
}

export default DisplayList
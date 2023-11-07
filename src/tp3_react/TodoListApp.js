import React, { useState } from 'react';
import './TodoListApp.css';

export default function TodoListApp() {
    // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the current task input
  const [taskInput, setTaskInput] = useState('');

  // Function to add a task
  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Function to mark a task as done
  const markDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = <s>{newTasks[index]}</s>;
    setTasks(newTasks);
  };
  return (
    
    <div className="p-5 m-5">
      <div className='card p-5 border border-radius-2'>
        <div className='card-title px-5 text-center'>
          <h1>To-Do ListApp</h1>
        </div>
        <div className='card-body px-5 py-2'>
          <div className='d-flex justify-content-center m-3'>
            <input
              type="text"
              placeholder="Add a task..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className='form-control'
            />
            <button onClick={addTask} className='btn btn-dark mx-3 bg-dark-gradient'>Add</button>
          </div>
          <div className='px-5 py-3 justify-content-between'>
            <ul className='list-group '>
              {tasks.map((task, index) => (
                <li key={index} className='list-group-item w-100 px-5'>
                  <div className='d-flex w-100 px-5 justify-content-between'>
                  <p className='d-flex mr-5'>{task}</p>
                  <div className='w-100'></div>
                  <div></div>
                  <div></div>
                  <div className='d-flex justify-content-end ml-5 position-relative '>
                    <button onClick={() => deleteTask(index)} className='btn btn-dark bg-danger mx-2'>
                      Delete
                    </button>
                    <button onClick={() => markDone(index)} className='btn btn-dark bg-success'>
                    Done
                    </button>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


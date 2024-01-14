import '../styles/App.css';
import React, { useState } from 'react';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = () => {
    if (taskInput !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setTaskInput(tasks[index]);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = taskInput;
    setTasks(updatedTasks);
    setEditIndex(-1);
    setTaskInput('');
  };

  return (
    <div className="App">
      
      <div className="add_tasks_section">
        <h3>To Do List</h3>
        <textarea
          value={taskInput}
          onChange={handleTaskInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasks_section">
        <ul id="taskList">
          {tasks.map((task, index) => (
            <li key={index} className="task">
              {editIndex === index ? (
                <div>
                  <textarea
                    value={taskInput}
                    onChange={handleTaskInputChange}
                  ></textarea>
                  <button className="save" onClick={() => saveTask(index)}>
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <span>{task}</span>
                  <button className="edit" onClick={() => editTask(index)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
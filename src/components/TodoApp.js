import React, { useState } from 'react';
import '../styles/App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    setEditingTaskId(taskId);
    setEditedTask(tasks.find((task) => task.id === taskId).text);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, text: editedTask } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <div className="todo-app">
      <div className="add_tasks_section">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="tasks_section">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className="save" onClick={saveTask}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button className="edit" onClick={() => editTask(task.id)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;

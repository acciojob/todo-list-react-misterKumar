
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleAdd = () => {
    if (taskInput.trim() !== "") {
      const updatedTasks = [...tasks];
      if (editIndex !== -1) {
        updatedTasks[editIndex] = taskInput;
      } else {
        updatedTasks.push(taskInput);
      }

      setTasks(updatedTasks);
      setTaskInput("");
      setEditIndex(-1);
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    handleAdd();
  };

  return (
    <div className="add_tasks_section">
      <h1>To Do App</h1>
      <input
        type="text"
        name="task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editIndex !== -1 ? "Save" : "Add Task"}
      </button>

      <ul className="tasks_section">
        {tasks.map((task, index) => (
          <li className="task" key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="save" onClick={handleUpdate}>
                  Save
                </button>
              </>
            ) : (
              <>
                {task}
                <button className=".edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className=".delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
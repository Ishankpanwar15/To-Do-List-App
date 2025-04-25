import { useState } from 'react'
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    
    setTasks([...tasks, task]);
    setNewTask("")
  };
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
        <input
          style={{ width: "270px", padding: "5px", fontSize: "14px" }}
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
  return (
      <div style={{ 
       padding: "20px",
       background: "LightGray",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       height: "90vh",
       flexDirection: "column"
       }}>
        <h1>To-Do List App</h1>
  
        <input
          style={{ width: "250px", padding: "3px", fontSize: "16px" }}
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        />        
        <button
        style={{ marginTop: "10px" }}
        onClick={handleAddTask}>Add</button>
    
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  )

}

export default App

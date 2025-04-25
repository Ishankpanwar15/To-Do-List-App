import { useState } from 'react'
import { Task } from './types';
import backgroundImage from "./assets/japan-background-digital-art.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
  

  return (
    <div
      style={{
        height: "92vh",
        width: "98%",
        backgroundImage: darkMode ? "none" : `url(${backgroundImage})`,
        backgroundColor: darkMode ? "#121212" : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20x",
            padding: "8px",
            background: darkMode ? "#ddd" : "#333",
            color: darkMode ? "#000" : "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <div
        style={{
          background: "transparent",
          backdropFilter:"blur(5px)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow:darkMode ?"5px 5px 20px 15px rgb(255 255 255 / 0.3)":"5px 5px 20px 25px rgb(0 0 0 / 0.1)",
          width:"400px",
          maxWidth:"90%",
        }}
        >
        <h1 >To-Do List App</h1>
  
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
        style={{ marginLeft: "10px", }}
        onClick={handleAddTask}>Add</button>
    
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, completed: !t.completed } : t
              )
            );
          }}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button
            onClick={() => {
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
            style={{ marginLeft: "10px" }}
            >
            Delete
          </button>
        </li>
        
        
      ))}
      </ul>
      {tasks.length > 0 && (
        <button
        onClick={() => setTasks([])}
        style={{ marginTop: "20px", background: "blue", color: "white", padding: "8px 16px" }}
        >
          Clear All
        </button>
      )}
      </div>

    </div>
    
  )

}

export default App

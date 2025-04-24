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
  

  return (
    <div>
      <h1>To do list</h1>
      <input 
      type="text"
      value={newTask}
      onChange={(e)=> setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
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

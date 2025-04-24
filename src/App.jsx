import { useState } from 'react'
import './App.css'
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';

function App() {
  const [tasks, setTasks] = useState([
    'Learn React basics',
    'Practice using components',
    'Build a simple app'
  ]);

    // Event handler to add a new task
    const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
    };
  
    // Event handler to delete a task
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };

    return (
      <div>
        <h1>My Todo List</h1>
        <TodoForm onAdd={addTask} />
        <div>
          {/* Array mapping to render TodoItem components */}
          {tasks.map((task, index) => (
            <TodoItem 
              key={index} 
              task={task} 
              // onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    );
}

export default App

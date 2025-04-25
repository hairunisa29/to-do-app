import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Form/ToDoForm";
import TodoItem from "./components/Item/ToDoItem";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React basics",
    "Practice using components",
    "Build a simple app",
  ]);

  // Event handler to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <h1>My Todo List</h1>

      <img
        src="https://cdn-icons-png.flaticon.com/512/8476/8476676.png"
        alt="to do list icon"
      />

      <TodoForm onAdd={addTask} />

      <div className="card-container">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </div>
    </main>
  );
}

export default App;

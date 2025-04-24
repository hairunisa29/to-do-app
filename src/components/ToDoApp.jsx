import { useState } from 'react';

// TodoItem component to display each task with delete functionality
const TodoItem = ({ task, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
      <span>{task}</span>
      <button 
        onClick={onDelete} 
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

// TodoForm component for adding new tasks
const TodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
};

// Main App component
const TodoApp = () => {
  // State to store all tasks
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
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
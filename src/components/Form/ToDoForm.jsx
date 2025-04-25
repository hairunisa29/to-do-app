import { useState } from "react";
import "./style.css";

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="form"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

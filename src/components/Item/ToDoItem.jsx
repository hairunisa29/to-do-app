import "./style.css";

function TodoItem({ task }) {
  return (
    <div className="card">
      <p>{task}</p>
    </div>
  );
}

export default TodoItem;

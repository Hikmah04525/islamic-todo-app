import "./TaskCard.css";

function TaskCard({ title, dueDate, completed, onToggle }) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <h2>{title}</h2>
      <p><strong>Due:</strong> {dueDate}</p>
      <button onClick={onToggle}>
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default TaskCard;

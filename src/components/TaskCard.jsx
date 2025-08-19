import "./TaskCard.css";

function TaskCard({ title, dueDate }) {
    return (
    <div className="task-card">
        <h2>{title}</h2>
        <p><strong>Due:</strong> {dueDate}</p>
    </div>
    );
}

export default TaskCard;

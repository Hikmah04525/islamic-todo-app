import TaskCard from "../components/TaskCard";

function Tasks() {
    const tasks = [
    { id: 1, title: "Read Surah Al-Kahf", dueDate: "Friday" },
    { id: 2, title: "Finish React Homework", dueDate: "Monday" },
    { id: 3, title: "Attend Coding Bootcamp", dueDate: "Saturday" },
    { id: 4, title: "Help Parents at Home", dueDate: "Daily" },
    ];

    return (
    <div className="tasks-container">
        <h1>My Tasks</h1>
        <div className="task-list">
        {tasks.map((task) => (
            <TaskCard key={task.id} title={task.title} dueDate={task.dueDate} />
        ))}
        </div>
    </div>
    );
}

export default Tasks;


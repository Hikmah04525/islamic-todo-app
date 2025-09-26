import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";

function Incomplete() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

    const incompleteTasks = tasks.filter((task) => !task.completed);

    const toggleTask = (id) => {
    const updated = tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    const updateTask = (id, updatedTask) => {
    const updated = tasks.map((t) =>
        t.id === id ? { ...t, ...updatedTask } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 overflow-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 text-center">
        Incompleted Tasks
        </h1>

    {incompleteTasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {incompleteTasks.map((task) => (
            <TaskCard
                key={task.id}
                title={task.title}
                dueDate={task.dueDate}
                priority={task.priority}
                completed={task.completed}
                onToggle={() => toggleTask(task.id)}
                onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
                onDelete={() => deleteTask(task.id)}
            />
            ))}
        </div>
        ) : (
        <p className="text-gray-600 mt-4 text-center text-xl">
            No incompleted tasks yet.
        </p>
        )}
    </div>
    );
}

export default Incomplete;

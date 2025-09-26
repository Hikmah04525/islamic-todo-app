import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";

function Incomplete() {
    const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
    useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

  // Filter only incomplete tasks
    const incompleteTasks = tasks.filter((task) => !task.completed);

    const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    const updateTask = (index, updatedTask) => {
    const updated = [...tasks];
    updated[index] = { ...updated[index], ...updatedTask };
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    return (
    <div className="page-container flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            Incompleted Tasks
        </h1>

        {incompleteTasks.length > 0 ? (
        <div className="w-full max-w-xl grid gap-4">
            {incompleteTasks.map((task, index) => (
            <TaskCard
                key={index}
                title={task.title}
                dueDate={task.dueDate}
                priority={task.priority}
                completed={task.completed}
                onToggle={() => toggleTask(index)}
                onUpdate={(updatedTask) => updateTask(index, updatedTask)}
                onDelete={() => deleteTask(index)}
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

import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";

function Completed() {
    const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on component mount
    useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

  // Filter only completed tasks
    const completedTasks = tasks.filter((task) => task.completed);

  // Toggle completed state
    const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

  // Update task properties
    const updateTask = (index, updatedTask) => {
    const updated = [...tasks];
    updated[index] = { ...updated[index], ...updatedTask };
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

  // Delete task
    const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    };

    return (
    <div className="page-container flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Completed Tasks
        </h1>

        {completedTasks.length > 0 ? (
        <div className="w-full max-w-xl grid gap-4">
            {completedTasks.map((task, index) => (
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
            No completed tasks yet.
        </p>
        )}
    </div>
    );
}

export default Completed;

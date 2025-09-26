import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import Ayah from "../components/Ayah";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPriority, setNewPriority] = useState("Low");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (!newTitle.trim() || !newDate.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      dueDate: newDate,
      priority: newPriority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDate("");
    setNewPriority("Low");
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 overflow-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700">
        My Tasks
      </h1>

      <Ayah />

      {/* Add Task Form */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center my-6">
        <input
          type="text"
          placeholder="Task title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full sm:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="w-full sm:w-1/5 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          onClick={addTask}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition focus:ring-2 focus:ring-green-400"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks
            .slice()
            .sort((a, b) => ({ Low:1, Medium:2, High:3 }[b.priority] - { Low:1, Medium:2, High:3 }[a.priority]))
            .map((task) => (
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
        <p className="text-gray-500 text-lg text-center mt-4">
          No tasks yet. Add your first one!
        </p>
      )}

      {allCompleted && (
        <p className="mt-6 text-lg text-green-600 text-center font-medium">
          Keep up the good work masha Allah!
        </p>
      )}
    </div>
  );
}

export default Tasks;

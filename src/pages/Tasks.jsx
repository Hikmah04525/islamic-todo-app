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

  // Toggle complete/undo
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add a new task
  const addTask = () => {
    if (newTitle.trim() === "" || newDate.trim() === "") return;

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

  // Delete a task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center mb-6">My Tasks</h1>

      <Ayah />

      {/* Add new task form */}
      <div className="flex gap-3 justify-center my-6 flex-wrap">
        <input
          type="text"
          placeholder="Task title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="text"
          placeholder="Due date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:ring-2 focus:ring-green-500 outline-none"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          onClick={addTask}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
        >
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-4 mt-6">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">
            No tasks yet. Add your first one!
          </p>
        ) : (
          tasks
            .slice()
            .sort((a, b) => {
              const order = { High: 3, Medium: 2, Low: 1 };
              return order[b.priority] - order[a.priority];
            })
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                dueDate={task.dueDate}
                priority={task.priority}
                completed={task.completed}
                onToggle={() => toggleTask(task.id)}
                onUpdate={(updatedTask) =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, ...updatedTask } : t
                    )
                  )
                }
                onDelete={() => handleDelete(task.id)}
              />
            ))
        )}
      </div>

      {allCompleted && (
        <p className="mt-6 text-lg text-green-600 text-center font-medium">
          Keep up the good work masha Allah!
        </p>
      )}
    </div>
  );
}

export default Tasks;

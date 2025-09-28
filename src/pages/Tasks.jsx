import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import Ayah from "../components/Ayah";
import useLocalStorage from "../hooks/useLocalStorage";
import confetti from "canvas-confetti";

function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPriority, setNewPriority] = useState("Low");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confettiFired, setConfettiFired] = useState(false);

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
  // ✅ Trigger confetti when all tasks are completed
        useEffect(() => {
  if (allCompleted && !confettiFired) {
    // small timeout to ensure DOM updates
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#4ade80", "#22c55e", "#86efac", "#16a34a"]
      });
    }, 100); // 100ms delay

    setConfettiFired(true);
  }

  if (!allCompleted && confettiFired) {
    setConfettiFired(false); // reset if a task is undone
  }
}, [allCompleted, confettiFired]);


  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 overflow-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700 transition-transform duration-200 hover:scale-105">
        My Tasks
      </h1>

      <Ayah />

      {/* Add Task Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-green-400"
        >
          Add Task
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-11/12 sm:w-1/2 lg:w-1/3 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Task title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={() => {
                  addTask();
                  setIsModalOpen(false);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-green-400"
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      {tasks.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {tasks
            .slice()
            .sort((a, b) => {
              const priorityMap = { Low: 1, Medium: 2, High: 3 };
              return priorityMap[b.priority] - priorityMap[a.priority];
            })
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

import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read Surah Al-Kahf", dueDate: "Friday", completed: false },
    { id: 2, title: "Attend React class", dueDate: "Monday", completed: false },
    { id: 3, title: "Shopping", dueDate: "Saturday", completed: false },
    { id: 4, title: "Azkar", dueDate: "Everyday", completed: false },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTitle.trim() === "" || newDate.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      dueDate: newDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDate("");
  };

  // ✅ Check if all tasks are completed
  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="page-container tasks-container">
      <h1>My Tasks</h1>

      {/* Add new task form */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Task title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Due date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task list */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>

      {/* ✅ Motivational message */}
      {allCompleted && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          🌟 Keep up the good work masha allah!
        </p>
      )}
    </div>
  );
}

export default Tasks;


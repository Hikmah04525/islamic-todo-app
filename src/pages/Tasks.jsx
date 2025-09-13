import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import Ayah from "../components/Ayah";

function Tasks() {
  // Load tasks from localStorage on app start
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add new task
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

  // check if all tasks are completed
  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="page-container tasks-container">
      <h1>My Tasks</h1>

      {/* Week 5 Quote */}
      <Ayah />

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
      <div
        className="task-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {tasks.length === 0 ? (
          <p style={{ color: "#777", fontSize: "18px", textAlign: "center" }}>
            No tasks yet. Add your first one! 
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              dueDate={task.dueDate}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
          ))
        )}
      </div>

      {/* Motivational message */}
      {allCompleted && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
            Keep up the good work masha allah!
        </p>
      )}
    </div>
  );
}

export default Tasks;

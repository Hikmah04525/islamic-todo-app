import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read Surah Al-Kahf", dueDate: "Friday", completed: false },
    { id: 2, title: "Finish React Homework", dueDate: "Monday", completed: false },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  // ✅ Place toggleTask here, inside the component
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

  return (
    <div className=" page-container tasks-container">
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
            onToggle={() => toggleTask(task.id)} // ✅ pass toggle handler
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;

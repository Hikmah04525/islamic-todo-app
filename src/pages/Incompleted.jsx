import TaskCard from "../components/TaskCard";
import useLocalStorage from "../hooks/useLocalStorage";

function Incomplete() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const incompleteTasks = tasks.filter((task) => !task.completed);

   const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700 transition-transform duration-200 hover:scale-105">
        Incompleted Tasks
      </h1>

      {incompleteTasks.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {incompleteTasks
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
        <p className="text-gray-500 text-lg text-center mt-4 transition-transform duration-300 hover:scale-105 hover:text-green-600">
          No incomplete tasks. great job!
        </p>
      )}
    </div>
  );
}

export default Incomplete;

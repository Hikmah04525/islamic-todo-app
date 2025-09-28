import { useState } from "react";

function TaskCard({ title, dueDate, priority, completed, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDate, setEditDate] = useState(dueDate);
  const [editPriority, setEditPriority] = useState(priority);

  const priorityColors = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
  };

  const handleSave = () => {
    onUpdate({ title: editTitle, dueDate: editDate, priority: editPriority });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(title);
    setEditDate(dueDate);
    setEditPriority(priority);
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-xl p-5 shadow-md flex flex-col justify-between transition-all duration-300 ease-in-out
    transform hover:scale-105 hover:shadow-lg
    ${completed ? "bg-green-100 line-through text-gray-500" : "bg-white"}`}
    >
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Task title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      ) : (
        <>
          <h2 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300`}>
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-2">
            <strong>Due:</strong> {dueDate}
          </p>
          <span
            className={`inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full mb-3 transition-colors duration-300
              ${priorityColors[priority] || "bg-gray-200 text-gray-700"}`}
          >
            {priority} Priority
          </span>
        </>
      )}

      {/* Buttons row */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 mt-3">
        <button
          onClick={onToggle}
          className={`px-4 py-2 rounded-lg text-white text-sm sm:text-base transition-transform duration-200 ease-in-out
            ${completed ? "bg-yellow-500 hover:bg-yellow-600 active:scale-95 focus:ring-yellow-400" 
                        : "bg-blue-600 hover:bg-blue-700 active:scale-95 focus:ring-blue-400"}`}
        >
          {completed ? "Undo" : "Complete"}
        </button>

        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm sm:text-base hover:bg-green-600 transition-transform duration-200 ease-in-out focus:ring-2 focus:ring-green-400"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg bg-gray-400 text-white text-sm sm:text-base hover:bg-gray-500 transition-transform duration-200 ease-in-out focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm sm:text-base hover:bg-green-600 transition-transform duration-200 ease-in-out focus:ring-2 focus:ring-green-400"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm sm:text-base hover:bg-red-600 transition-transform duration-200 ease-in-out focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;

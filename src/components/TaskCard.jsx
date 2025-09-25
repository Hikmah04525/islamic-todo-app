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
      className={`rounded-xl p-5 shadow-md text-center transition ${
        completed
          ? "bg-green-100 line-through text-gray-500"
          : "bg-white hover:shadow-lg"
      }`}
    >
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 outline-none"
          />
          <input
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 outline-none"
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 outline-none"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Due:</strong> {dueDate}
          </p>
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-3 ${
              priorityColors[priority] || "bg-gray-200 text-gray-700"
            }`}
          >
            {priority} Priority
          </span>
        </>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-2 mt-2">
        <button
          onClick={onToggle}
          className={`px-4 py-2 rounded-lg text-white transition ${
            completed
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {completed ? "Undo" : "Complete"}
        </button>

        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
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

import { useState } from "react";

function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    const trimmedText = editText.trim();

    if (!trimmedText) {
      return;
    }

    onEdit(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }

    if (event.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 cursor-pointer accent-violet-600"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-slate-700 outline-none focus:border-blue-400"
        />
      ) : (
        <p
          className={`min-w-0 flex-1 break-words ${
            todo.completed
              ? "text-slate-400 line-through"
              : "text-slate-700"
          }`}
        >
          {todo.text}
        </p>
      )}

      <div className="flex shrink-0 gap-2">

        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-100"
            >
              Save
            </button>

            <button
              onClick={() => {
                setEditText(todo.text);
                setIsEditing(false);
              }}
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-600 hover:bg-violet-100"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-100"
            >
              Delete
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default TodoItem;
import { useState } from "react";

function TodoForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    onAdd(trimmedTask);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row"
    >
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-slate-700 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
      />

      <button
        type="submit"
        className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
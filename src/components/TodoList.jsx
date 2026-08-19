
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-medium text-slate-500">
          No tasks yet
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Add your first task above.
        </p>
      </div>
    );
  }

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div>

      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-sm font-medium text-slate-500">
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </p>

        <p className="text-sm font-medium text-green-600">
          {completedTasks} completed
        </p>
      </div>

      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </div>

    </div>
  );
}

export default TodoList;
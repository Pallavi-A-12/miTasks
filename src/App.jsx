import { useEffect, useState } from "react";
import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoItem";

function App() {

    const [todos, setTodos] = useState( () => {

        const savedTodos = localStorage.getItem("todos");

        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTodos((previousTodos) => [...previousTodos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos((previousTodos) =>
            previousTodos.filter((todo) => todo.id !== id)
        );
    };

    const toggleTodo = (id) => {
        setTodos((previousTodos) =>
            previousTodos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
         );
    };

    const editTodo = (id, newText) => {
        setTodos((previousTodos) =>
            previousTodos.map((todo) =>
            todo.id === id
                ? { ...todo, text: newText }
                : todo
            )
        );
    };

    return (
        <div className="min-h-screen bg-slate-100 px-4 py10">
            
            <div className="mx-auto max-w-2xl">

                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-slate-800">
                        My Todo List
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Organize your tasks and stay productive.
                    </p>
                </div>

                <TodoForm onAdd={addTodo} />

                <TodoList
                    todos={todos}
                    onDelete={deleteTodo}
                    onToggle={toggleTodo}
                    onEdit={editTodo}
                />

            </div>
        </div>
    );

}

export default App;
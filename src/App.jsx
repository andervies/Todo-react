import "./App.css";
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(
    () => localStorage.setItem("ITEMS", JSON.stringify(todos)),
    [todos]
  );

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <h1> What are we doing today? </h1>

      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">ToDo List</h1>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

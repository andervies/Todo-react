import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos yet"}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

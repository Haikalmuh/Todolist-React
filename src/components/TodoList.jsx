import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada todo.</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

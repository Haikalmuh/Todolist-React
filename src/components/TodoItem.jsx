import { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim()) {
      editTodo(todo.id, text.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl shadow">
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            className="flex-grow border rounded p-1 text-black"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className={`flex-grow ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2 ml-2">
        <button
          onClick={handleEdit}
          className="bg-blue-50 text-blue-500 hover:bg-blue-200 hover:text-blue-700 py-2 px-2 rounded-md"
        >
          {isEditing ? "Simpan" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-50 text-red-500 hover:bg-red-200 hover:text-red-700 hover:text-red-700 py-2 px-2 rounded-md"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

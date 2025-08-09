import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-2 rounded-xl border border-gray-300 focus:outline-none"
        placeholder="Tambah todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-xl hover:bg-blue-600 ml-2"
      >
        Tambah
      </button>
    </form>
  );
}

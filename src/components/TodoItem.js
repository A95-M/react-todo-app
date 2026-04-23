import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
return (
  <li className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow">

    <div
  onClick={() => toggleTodo(index)}
  className={`flex-1 cursor-pointer break-words pr-4 min-w-0 ${
    todo.completed ? "line-through text-gray-400" : ""
  }`}
>
  {todo.text}
</div>

    <div className="flex gap-2 ml-4">
      <button
        onClick={() => {
  const newText = prompt("Edit your todo:", todo.text);
  if (newText !== null && newText.trim() !== "") {
    editTodo(index, newText);
  }
}}
        className="bg-yellow-400 px-3 py-1 text-sm rounded"
      >
        Edit
      </button>

      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-3 py-1 text-sm rounded"
      >
        Delete
      </button>
    </div>

  </li>
);
}

export default TodoItem;
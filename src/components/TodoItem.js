import React, { useState } from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

return (
  <li className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 mb-2 rounded shadow gap-2 transition ${
  todo.completed
    ? "bg-green-100 text-black"
    : "bg-white text-black dark:bg-gray-800 dark:text-white"
}`}>

    <div
  onClick={() => {
  if (!isEditing) toggleTodo(index);
}}
  className={`flex-1 cursor-pointer break-words pr-4 min-w-0 ${
    todo.completed ? "line-through text-gray-400" : ""
  }`}
>
  {isEditing ? (
    <input
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onBlur={() => {
        if (editText.trim() !== "") {
          editTodo(index, editText);
        }
        setIsEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (editText.trim() !== "") {
            editTodo(index, editText);
          }
          setIsEditing(false);
        }
      }}
      autoFocus
      className="border p-1 w-full"
    />
  ) : (
    todo.text
  )}
</div>

    <div className="flex gap-2 ml-4">
      <button
        onClick={() => {
          setIsEditing(true);
          setEditText(todo.text);
        }}
        className="bg-yellow-400 text-black px-3 py-1 text-sm rounded"
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
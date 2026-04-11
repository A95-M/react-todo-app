import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
return (
  <li className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow">

    <span className={todo.completed ? "line-through" : ""}>
      {todo.text}
    </span>

    <div className="flex gap-2">
      <button
        onClick={() => editTodo(index)}
        className="bg-yellow-400 px-2 py-1 rounded"
      >
        Edit
      </button>

      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>

  </li>
);
}

export default TodoItem;
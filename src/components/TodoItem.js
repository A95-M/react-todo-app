import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li>
      <span
        onClick={() => toggleTodo(index)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
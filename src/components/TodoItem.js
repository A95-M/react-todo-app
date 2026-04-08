import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
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

      <button
  onClick={() => {
    const newText = prompt("Edit your todo:", todo.text);
    if (newText !== null && newText.trim() !== "") {
      editTodo(index, newText);
    }
  }}
>
  Edit
</button>
    </li>
  );
}

export default TodoItem;
import React, { useState, useEffect } from 'react';
import TodoItem from "./components/TodoItem";

function App() {

  // State to store todos
  const [todos, setTodos] = useState(() => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

  // State to store input value
  const [input, setInput] = useState('');

  // State to store current filter (all, active, completed)
  const [filter, setFilter] = useState("all");

  // Save todos to localStorage whenever todos change
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  // Function to add todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  // Function to delete todo
  const deleteTodo = (indexToDelete) => {
  setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  // Function to clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !
    todo.completed));
  };

  // Function to toggle completed status
  const toggleTodo = (indexToToggle) => {
  setTodos(
    todos.map((todo, index) =>
      index === indexToToggle
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

const editTodo = (indexToEdit, newText) => {
  setTodos(
    todos.map((todo, index) =>
      index === indexToEdit
        ? { ...todo, text: newText }
        : todo
    )
  );
};

const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true;
});

const remainingTodos = todos.filter(todo => !
  todo.completed).length;

return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
    
    <h1 className="text-3xl font-bold mb-6">
      React Todo App
    </h1>

    <div className="flex mb-4">
      <input
        className="border p-2 rounded mr-2"
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </div>

    <div className="mb-4">
  <button
    className={`mr-2 px-3 py-1 border rounded ${
      filter === "all" ? "bg-blue-500 text-white" : ""
    }`}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={`mr-2 px-3 py-1 border rounded ${
      filter === "active" ? "bg-blue-500 text-white" : ""
    }`}
    onClick={() => setFilter("active")}
  >
    Active
  </button>

  <button
    className={`px-3 py-1 border rounded ${
      filter === "completed" ? "bg-blue-500 text-white" : ""
    }`}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>

    <button
      onClick={clearCompleted}
      className="mb-4 bg-gray-700 text-white px-3 py-1 rounded"
    >
      Clear Completed
    </button>

    <ul className="w-full max-w-md">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>

    <p className="mt-4 text-gray-600 text-sm">
      {remainingTodos} {remainingTodos === 1 ? "task" : "tasks"} left
    </p>

  </div>
);
}

export default App;
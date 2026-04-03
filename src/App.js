import React, { useState } from 'react';

function App() {

  // State to store todos
  const [todos, setTodos] = useState([]);

  // State to store input value
  const [input, setInput] = useState('');

  // Function to add todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  // Function to delete todo
  const deleteTodo = (indexToDelete) => {
  setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const toggleTodo = (indexToToggle) => {
  setTodos(
    todos.map((todo, index) =>
      index === indexToToggle
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

  return (
    <div>
      <h1>React Todo App</h1>

      <input 
        type="text" 
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

    <ul>
  {todos.map((todo, index) => (
  <li key={index}>
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
  ))}
</ul>
    </div>
  );
}

export default App;
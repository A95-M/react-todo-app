import React, { useState } from 'react';

function App() {

  // State to store todos
  const [todos, setTodos] = useState([]);

  // State to store input value
  const [input, setInput] = useState('');

  // Function to add todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
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
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
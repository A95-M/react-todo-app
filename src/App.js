import React, { useState } from 'react';

function App() {

  // State to store todos
  const [todos, setTodos] = useState([]);

  // State to store input value
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>React Todo App</h1>

      <input 
        type="text" 
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button>Add Todo</button>

      <ul></ul>
    </div>
  );
}

export default App;
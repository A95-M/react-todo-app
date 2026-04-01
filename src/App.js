import React, { useState } from 'react';

function App() {

  // State to store todos
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>React Todo App</h1>

      <input type="text" placeholder="Enter a todo" />

      <button>Add Todo</button>

      <ul></ul>
    </div>
  );
}

export default App;
import React from 'react';

function App() {
  return (
    <div>
      <h1>React Todo App</h1>

      {/* Input field for new todo */}
      <input type="text" placeholder="Enter a todo" />

      {/* Button to add new todo */}
      <button>Add Todo</button>

      {/* Unordered list for todos */}
      <ul></ul>
    </div>
  );
}

export default App;
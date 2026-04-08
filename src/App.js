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

  // Save todos to localStorage whenever todos change
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

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
    </div>
  );
}

export default App;
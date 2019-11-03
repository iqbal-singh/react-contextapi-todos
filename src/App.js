import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
    <div className="App">
      <h1>To-do List</h1>
      <TodoForm />
      <TodoList />
      </div>
      </TodoProvider>
  );
}

export default App;

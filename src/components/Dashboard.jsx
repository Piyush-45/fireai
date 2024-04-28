// components/Dashboard.js
import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import TodoList from './TodoList';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const { handleLogout, handleCreateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      handleCreateTodo(todo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <SearchBar />
      <TodoList />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Dashboard;
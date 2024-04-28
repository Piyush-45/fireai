// TodoContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch todos from mock API
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleLogin = () => {
    // Implement login logic 
    if (username === '' || password === '') {
        alert("field cannot be empty");
    } else {
        setIsAuthenticated(true);
    }
}


  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleCreateTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const value = {
    todos: filteredTodos,
    isAuthenticated,
    searchQuery,
    handleLogin,
    handleLogout,
    handleCreateTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleSearch,
    username, setUsername,
    password, setPassword
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
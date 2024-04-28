// components/LoginPage.js
import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const naviagte = useNavigate()
  const { handleLogin, username,setUsername,password, setPassword} = useContext(TodoContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic
    handleLogin();
    naviagte('/dashboard')
    
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
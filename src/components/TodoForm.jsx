// components/TodoForm.js
import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
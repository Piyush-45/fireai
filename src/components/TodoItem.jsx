// components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggleComplete = () => {
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      handleUpdateTodo({
        ...todo,
        title: editedTitle,
      });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
          <button onClick={handleToggleComplete}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
// components/TodoList.js
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, handleDeleteTodo, handleUpdateTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

import React, { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      )}
      <button className='edit-btn' onClick={handleEdit}>{isEditing ? 'Save ✔' : 'Edit 🖍'}</button>
      <button className="del-btn"onClick={() => deleteTodo(todo.id)}>Delete 🗑</button>
    </div>
  );
}

export default ToDoItem;

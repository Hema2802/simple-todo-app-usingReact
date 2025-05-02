// importing

import './App.css'
import React, { useState } from 'react';  
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import CompletedItems from './components/CompletedItems';
import DeletedItems from './DeletedItems';


function App() {
  // create state variable
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [todolist, setTodolist] = useState([]);

  // add to do items
  
  const addTodo = () => {
    if (input.trim() === '') 
      return;
    setTodos([...todos, { 
       id: Date.now(),
       text: input, 
       completed: false }]);
    setInput('');
  };

  // delete to do items
  const deleteTodo = (id) => {
    const deleted = todos.find(todo => todo.id === id);
    setDeletedTodos([...deletedTodos, deleted]);
    setTodos(todos.filter(todo => todo.id !== id)); // todo's id should not equal to id
  };

// completed items indicating

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>  // map process to listout completed task
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
// for do any editing in existing list items
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>  
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  

const toggleCompletelist = (id) => {
  setTodolist(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

  return (
    <>
      <div className="app">
      <Header     // pass props to header component
        input={input}
        setInput={setInput}
        addTodo={addTodo} />
       <div className="input-section">
        <input    // create input to enter task
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='add-btn' onClick={addTodo}>Add ➤</button>  
        {/* button to add new task items */}
      </div>

      {/* ToDoList component and passing props */}
       <ToDoList   
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
                  {/* two component completedItems and DeletedItems */}
      <div className='complete-delete'>
      <CompletedItems todos={todos}/>
      <DeletedItems deletedTodos={deletedTodos}/>

      </div>

      

      
      
    </div>
    </>
  )
}
 // exporting app component
export default App  ;  

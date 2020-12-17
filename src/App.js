import React from 'react';
import './App.css';
import InputForm from './components/InputForm'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className = 'container'> 
      <p>
        ToDo List
      </p>

      <InputForm />
      <ToDoList />

    </div>
  );
}

export default App;

import '../css/App.css';
import { useState } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';


function App() {
  
  const [todos, setTodos] = useState([]);

 
  
  return (
    <div>
      <h1>ToDo App</h1>
      <Todo setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

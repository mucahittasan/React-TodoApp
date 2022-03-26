import '../css/App.css';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';


function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    const data = JSON.parse(localStorage.getItem('todos'));
    if(data){
      setTodos(data);
    }
  }, [])
 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  return (
    <div>
      <h1>ToDo App</h1>
      <Todo setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

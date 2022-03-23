import React, {useState} from 'react'
import '../css/Todo.css'
import TodoList from './TodoList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = ({setTodos, todos}) => {

    const [todoValue, setTodoValue] = useState('')

    const todoAdded = () => toast.success('Todo added!');
    const todoEmpty = () => toast.warning('Todo cannot be empty!');

 

    const handleSubmit = (e) => {
        e.preventDefault()

        if(todoValue.trim() === '') {
            return todoEmpty();
        }else{
            setTodos([...todos, todoValue])
            setTodoValue('');
        }
    }

    
  return (
    <div className='todo'>
    
        <ToastContainer />
        <form onSubmit={(e) => {handleSubmit(e); setTodoValue('')}}  className="todo-header">
            <input onChange={ (e) => setTodoValue(e.target.value) }
                   type="text"
                   placeholder='Enter Your ToDo'
                    value={todoValue}
                   />
            <button onClick={() =>{
                if(todoValue){ 
                    todoAdded()
                }else {
                    return;
                };
            }} type='submit'>
                <i className='fas fa-plus'></i>
            </button>
        </form>        
        <TodoList/>
    </div>
  )
}

export default Todo;
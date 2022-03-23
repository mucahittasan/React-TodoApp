import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoItem = ({todo, index, todos, setTodos}) => {

    const [check, setCheck] = useState(false);
    const todoDeleted = () => toast.error('Todo deleted!');


    const deleteItem = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);

        todoDeleted();
    }



  return (
      <li key={index} className="todo-item">
      <ToastContainer />
            <p onClick={(e) => setCheck(!check)}>{todo}</p>
            <button onClick={() => deleteItem(index)}>
                <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
  )
}

export default TodoItem
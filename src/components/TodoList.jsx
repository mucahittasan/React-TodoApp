import '../css/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {

  return (
    <ul className="todo-body">
      {
        todos ? 
        todos.map((todo, index) => (
         <TodoItem key={index} todo={todo} index={index} todos={todos} setTodos={setTodos} />
        ))
        : null
      }
    </ul>
  )
}

export default TodoList
import {useDispatch, useSelector} from 'react-redux'

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos  = useSelector(state => state.todos); 
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  })

  if (!todos || !todos.length) {
    return <p className = 'todo-item no-todo-item'>no todos</p>
  }
  return (
    <ul>
      {todos.map(todo => <li className = 'todo-item' onClick = {() => handleClick(todo.id)} key = {todo.id}>{todo.label}</li>)}
    </ul>
  )
};

export default ToDoList
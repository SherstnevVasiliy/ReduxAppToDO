import {useDispatch, useSelector} from 'react-redux'
import {editTask} from '../reducers/action/actionList'


const ToDoList = () => {
  const dispatch = useDispatch();
  const todos  = useSelector(state => state.todos); // НЕВЕДОМАЯ ХУЙНЯ
  const handleClick = id => dispatch(editTask(id))

  console.log('==================')
  console.log(todos)
  console.log('==================')

  if (!todos || !todos.length) {
    return <p className = 'todo-item no-todo-item'>no todos</p>
  }
  return (
    <ul>
      {todos.map(todo => <li className = {todo.done ? undefined :'todo-item'} onClick = {() => handleClick(todo.id)} key = {todo.id}>{todo.taskName}</li>)}
    </ul>
  )
};

export default ToDoList
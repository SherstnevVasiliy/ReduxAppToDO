import {useDispatch, useSelector} from 'react-redux'

const InputForm = () => {
    const dispatch = useDispatch();
    const todos  = useSelector(state => state.todos); 
    const formHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;
        if (data.taskName.value !== '') {
        dispatch({
          type: 'ADD_TODO',
          payload: {
            label: data.taskName.value,
            id: todos.length + 1,
          }
        })
        data.taskName.value = '';
    }
    }
  
    return <div>
        <form className = 'form' onSubmit={formHandler}>
            <div className = 'input-wrap'>
                <input className = 'input' type = 'text' name = 'taskName' placeholder = 'input task...'/>
            </div>
            <div>
                <button className = 'btn' type='submit'>Add new task</button>
            </div>
        </form>
    </div>
}

export default InputForm
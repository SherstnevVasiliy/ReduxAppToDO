import {useDispatch} from 'react-redux'
import {addTask} from '../reducers/action/actionInput'


const InputForm = () => {
    const dispatch = useDispatch();
    const formHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;
        if (data.taskName.value !== '') {
        dispatch(addTask(data.taskName.value));
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
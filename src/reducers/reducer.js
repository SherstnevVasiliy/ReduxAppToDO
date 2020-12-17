import initialState from '../store/initialState'

const reducer = (state = initialState, action) => {
    let {todos} = state;
    switch (action.type) {
        case 'ADD_TODO':
            console.log('add task work');//РЕДЮСЕР СРАБОТАЛ
            console.log('prewtodos',state);// НАЧАЛЬНОЕ СОСТОЯНИЕ

            todos.push({
                id: todos.length + 1,
                taskName: action.payload,
                done: false
            })
            console.log('newtodos', state)//НОВОЕ СОСТОЯНИЕ
            // **************** ГДЕ ТО ТУТ ДОЛЖЕН БЫТЬ РЕТЕРН!!!!!! НО РАБОТАЕТ БЛЯТЬ БЕЗ НЕГО А С НИМ НЕТ
            
            // ******** пробовал заменить удаление за изменение компонента нихера не сработало
        // case 'EDIT_TODO':
        //     todos.map((todo => todo.id === action.payload?
        //         (todo.done= !todo.done) :
        //         (false)
        //     ))
                        
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
                };

        default:
            return state;
        
    }
}

export default reducer;


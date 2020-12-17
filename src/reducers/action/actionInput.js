// export const addTask = (payload) => ({
//     type: 'ADD_TODO',
//     payload,

// });

let nextTodoId = 0;

export const addTodo = (taskName) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTodoId,
    taskName,
    done: false,
  },
});
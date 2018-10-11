// LIBRARY CODE
/**
 
 * 
 * @returns 
 */

/**
 * A DIFERENCIA DEL FICHERO index.js aquí la función
 * reducer la pasamos por parámetro. No tiene sentio¡do que,
 * siendo "createStore" una librería, tenga acceso a una
 * función (todos) fuera de su ámbito => Por esto 
 * la pasamos por parámetro 
 * 
 * @param {any} reducer 
 * @returns 
 */
function createStore(reducer) {

  // The store should have 4 parts:
  // 1. The state
  // 2. Get the state
  // 3. Listen to change on the state
  // 4. Update the state (dispatch function)

  // 1. The state
  let state;
  let listeners = [];

  // 2. Get the state
  const getState = () => state;

  // 3. Listen to change on the state
  const subscribe = (listerner) => {
    listeners.push(listerner);
    return () => {
      // Devuelve todos los listener excepto el que se pasa por parámetro
      // Si ya existe entonces se produce una unsubscription
      listeners = listeners.filter((l) => (l !== listener))
    }
  }

  // 4. Update the state (dispatch function)
  const dispatch = (action) => {
    state =  reducer(state, action);
    listeners.forEach((listener) => listeners());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOOGLE_TODO = 'TOOGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// Action CREATORS

/**
 * Action creator
 * 
 * @param {any} todo 
 * @returns 
 */
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

/**
 * Action creator
 * 
 * @param {any} id 
 * @returns 
 */
function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

/**
 * Action creator
 * 
 * @param {any} todo 
 * @returns 
 */
function toogleGoalAction(todo) {
  return {
    type: TOOGLE_TODO,
    todo,
  }
}

 /**
 * Action creator
 * 
 * @param {any} goal 
 * @returns 
 */
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    id,
  }
}

/**
 * Action creator
 * 
 * @param {any} id 
 * @returns 
 */
function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

// APP CODE
// Esta función es un REDUCER, porque lo que hace es coger un estado en una action y reducirlo a un nuevo estado.
// 'state = []' esto es de ES6
// Esta función es una PURE FUNCTION
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]); // brand new state  
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOOGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? todo : 
        Object.assign({}, todo, { complete: !todo.complete }));
    default: return state;
  }
}

// 2ND REDUCER
function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]); // brand new state  
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default: return state;
  }
}

function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: todos(state.goals, action)
  }
}

const store = createStore(rootReducer);
// const store = createStore(todos);

store.subscribe(() => {
  console.log('The new state is: ' + store.getState())
})

// store.dispatch({
//   type: ADD_TODO,
//   id: 0,
//   name: 'Learn Redux Part I',
//   complete: true
// });

store.dispatch(addTodoAction({
  id: 0,
  name: 'Learn Redux Part I',
  complete: true
}));

// store.dispatch({
//   type: ADD_TODO,
//   id: 1,
//   name: 'Learn Redux  Part II',
//   complete: true
// });

store.dispatch(addTodoAction({
  id: 1,
  name: 'Learn Redux  Part II',
  complete: true
}));

// store.dispatch({
//   type: ADD_TODO,
//   id: 2,
//   name: 'Learn Redux Part III',
//   complete: false
// });

store.dispatch(addTodoAction({
  id: 2,
  name: 'Learn Redux  Part III',
  complete: false
}));

store.dispatch(removeTodoAction(3));

store.dispatch(toogleTodoAction(0));

store.dispatch(addGoalAction({
  id: 1,
  name: 'Go to gym',
  done: false
}));

store.dispatch(addGoalAction({
  id: 2,
  name: 'Do shopping',
  done: true
}));

store.dispatch(removeTodoAction(1));

const unsubscribe = store.subscribe(() => {
  console.log('The store changed')
})

unsubscribe();
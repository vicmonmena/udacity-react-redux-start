// LIBRARY CODE
function createStore() {

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
    state =  todos(state, action);
    listeners.forEach((listener) => listeners());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
// APP CODE
// Esta función es un REDUCER, porque lo que hace es coger un estado en una action y reducirlo a un nuevo estado.
// 'state = []' esto es de ES6
function todos(state = [], action) {
  if (action === 'ADD_TODO') {
    return state.concat([action.todo]); // brand new state
  }
  return state; // same state as passed as argument
}
const store = createStore();

store.subscribe(() => {
  console.log('The new state is: ' + store.getState())
})

const unsubscribe = store.subscribe(() => {
  console.log('The store changed')
})

unsubscribe();
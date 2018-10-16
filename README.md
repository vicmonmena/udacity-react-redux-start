This project is a quick start guide about how to learn and understand Redux

# This program targets:

## 1st: UI target of this project
This is the target UI of our project:
![UI target](./docs/ui_target.jpg)

## These are the main functionalities:
![Functionalities](./docs/project-functionalities.jpg)

1. Add task to list (todo or goal)
1. Mark task as completed (onlye todo)
1. Delete task from list (todo or goal)

## 2nd: Deny task related to 'bitcoin' (checker middleware)

Identificates when any of the text inputed in the field contains the word 'bitcoin', does not registers it and shows a message. 
Don't let add anything with the word 'bitcoin'.

![Checker Middleware](./docs/checker-middleware.jpg)

## 3rd: Generate console logs per action type (Logger middleware)

![Logger Middleware](./docs/logger-middleware.jpg)

## Redux -> Predictable
![Predictable](./docs/predictable.jpg)

## Store / State tree

### The store should have 4 parts:
1. The state
1. Get the state
1. Listen to change on the state
1. Update the state (dispatch function)

![4 parts of Store](./docs/store_4_parts.jpg)

## Action

![Actions](./docs/actions.jpg)

## Reducer

### Pure Function

*Take an state end reduce it to a new brand state*

![Pure Functions](./docs/pure_function_definition.jpg)

## Action Creator

![Action Creators](./docs/action_creators.jpg)

## Middleare (Redux)

The Redux docs describe [middleware](https://redux.js.org/advanced/middleware) as:

![Middleware Redux](./docs/middleware-redux.jpg)

### Redux middleware properties

![Redux Middleware Properties](./docs/redux-middleware-properties.jpg)

### Operations that a middleware can do before passing the action along to the reducer:

![Middleware Redux Operations](./docs/middleware-redux-actions.jpg)

### How to use Redux middlewares:

```js
const store = Redux.createStore( <reducer-function>, <middleware-functions> )
```

![Redux Middlewares](./docs/redux-middlewares.jpg)

## [Hight-Order Functions](https://www.udacity.com/course/object-oriented-javascript--ud711)

![Hight-Order Functions](./docs/hight-order-functions.jpg)

# [REF](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs)

![REF from react](./docs/react-ref.jpg)

React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts. Refs are guaranteed to be up-to-date before `componentDidMount` or `componentDidUpdate` fires.
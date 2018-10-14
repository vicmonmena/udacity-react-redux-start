This project is a quick start guide about how to learn and understand Redux

# This program targets:

## 1st: UI target of this project
This is the target UI of our project:
![UI target](./ui_target.jpg)

## 2nd: Deny task related to 'bitcoin'

Identificates when any of the text inputed in the field contains the word 'bitcoin', does not registers it and shows a message. 
Don't let add anything with the word 'bitcoin'.

## Redux -> Predictable
![Predictable](./predictable.jpg)

## Store / State tree

### The store should have 4 parts:
1. The state
1. Get the state
1. Listen to change on the state
1. Update the state (dispatch function)

![4 parts of Store](./store_4_parts.jpg)

## Action

![Actions](./actions.jpg)

## Reducer

### Pure Function

*Take an state end reduce it to a new brand state*

![Pure Functions](./pure_function_definition.jpg)

## Action Creator

![Action Creators](./action_creators.jpg)

## Middleare (Redux)

The Redux docs describe [middleware](https://redux.js.org/advanced/middleware) as:

![Middleware Redux](./middleware-redux.jpg)

### Redux middleware properties

![Redux Middleware Properties](./redux-middleware-properties.jpg)

### Operations that a middleware can do before passing the action along to the reducer:

![Middleware Redux Operations](./middleware-redux-actions.jpg)

### How to use Redux middlewares:

```js
const store = Redux.createStore( <reducer-function>, <middleware-functions> )
```

![Redux Middlewares](./redux-middlewares.jpg)

## [Hight-Order Functions](https://www.udacity.com/course/object-oriented-javascript--ud711)

![Hight-Order Functions](./hight-order-functions.jpg)
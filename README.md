# Reduxless Reducer - React Counter App

This is an attempt to create a reducer-like architecture in React without the use of Redux.

![](/docs/images/counter.png)

## Reducers
```javascript
const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}
```

## State to Props connector
```javascript
state = counter(undefined, {})
```

## Dispatch to Props connector
```javascript
dispatch(action) {
  this.setState(prevState => counter(prevState, action))
}
```

## Action Creator
```javascript
increment = () => {
  this.dispatch({ type: 'INCREMENT' })
}
decrement = () => {
  this.dispatch({ type: 'DECREMENT' })
}
```

## Reference
https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
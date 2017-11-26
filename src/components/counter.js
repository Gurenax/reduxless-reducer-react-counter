import React, { Component } from 'react'

// Reducers
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

class Counter extends Component {
  
  // State to Props
  state = counter(undefined, {})

  // Dispatch to Props
  dispatch(action) {
    this.setState(prevState => counter(prevState, action))
  }

  // Action Creator
  increment = () => {
    this.dispatch({ type: 'INCREMENT' })
  }
  decrement = () => {
    this.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div class="counter">
        <h1>{this.state.value}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter;
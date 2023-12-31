import React, { useState, Component } from "react"
import { createContainer } from "unstated-next"

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState)
  let decrement = () => setCount(count - 1)
  let increment = () => setCount(count + 1)
  return { count, decrement, increment }
}

let Counter = createContainer(useCounter)

function CounterDisplay() {
  let counter = Counter.useContainer()
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <Counter.Provider>
          <CounterDisplay />
        </Counter.Provider>
        <Counter.Provider initialState={2}>
          <div>
            <div>
              <CounterDisplay />
            </div>
          </div>
        </Counter.Provider>
      </>
    );
  }
}

export default App;

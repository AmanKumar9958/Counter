import { useState } from 'react'
import React from 'react'
function App() {
  let [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h2>Welcome, This is a simple Counter App by React JS</h2>
      <h2>Current Value: {counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App

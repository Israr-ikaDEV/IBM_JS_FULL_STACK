import { useState } from "react";
import CounterButtons from "./CounterButtons"
import CounterDisplay from "./CounterDisplay"
import ResetButton from "./ResetButton"
import   './App.css'




function App() {
  
const [count, setCount] = useState(0);


function increase () {setCount((count) => count + 1)};

function decrease () {setCount((count) => count - 1)};

function reset () { setCount(0)};

  return (
    <>
      
      <h1>Counter App</h1>
      <CounterDisplay  count={count} />
      <CounterButtons  increment={increase} decrement={decrease} />
      <ResetButton  reset={reset} />
    </>
  )
}

export default App

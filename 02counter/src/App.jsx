import './App.css'
import { useState } from 'react'

function App() {

  let [counterValue, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counterValue + 1);
    console.log("Value Added: ", counterValue);
  }

  const decreaseValue = () => {
    counterValue = counterValue - 1;
    if (counterValue < 0) {
      counterValue = 0;
      document.getElementById("counterval").style.color = "red";

      setTimeout(() => {
        document.getElementById("counterval").style.color = ""; 
      }, 250);
    }
    console.log("Value Decreased: ", counterValue);
    setCounter(counterValue);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: <span id="counterval">{counterValue}</span></h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App;
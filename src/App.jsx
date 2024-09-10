import { useState } from 'react'
import './App.css'


function App() {
  let [counter, YahyaCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      YahyaCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      YahyaCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease value</button>

    </>
  )
}

export default App

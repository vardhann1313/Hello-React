import { useState } from "react";

function App() {

  let [Counter, setCounter] = useState(0);

  const increase = () => {
    if(Counter != 20){
      Counter++ ;
      setCounter(Counter)
  }
}
  const decrease = () => {
      if(Counter != 0){
         Counter-- ;
        setCounter(Counter)  
    }
  }
  const reset = () => {
    Counter = 0 ;
    setCounter(Counter)
  }

  return (
    <>
      <h1>-- Counter --</h1>
      <h2> Counter value : {Counter}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

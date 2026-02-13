import React, { useState } from 'react'

const App = () => {

  const [currentClock, setCurrentClock] = useState(1)
  const [timer , setTimer] = useState(0); 

  function startClock  (){
   let value = setInterval(() => {
      setCurrentClock(c => c+1)
      
    }, 1000);
    setTimer(value)
  }
  function stopClock(){
    clearInterval(timer)
  }
  return (
    <div>
      {currentClock} <br/>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default App
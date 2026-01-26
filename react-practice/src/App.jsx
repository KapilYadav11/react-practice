import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const App = () => {

  let [counterVisible, setCounterVisible] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
       setCounterVisible(c => !c)
    }, 5000)

  }, [])
  return (
    <div>
      <b>
        hello 
      </b>
      { counterVisible && <Counter></Counter>}
    </div>
  )
}

export default App
 import React, { useState } from 'react'

//Custom Hook
const useCounter = () => {
     const [count, setCount] = useState(1)
       function increaseCount() {
    setCount(c => c + 1)
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}
  

export function Counter(){
   const { count, increaseCount } = useCounter()

return (
  <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
)
}


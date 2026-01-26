import { useState, useEffect } from 'react'

const Counter = () => {
    
 
    const [count, setCount] = useState(0)

      console.log("counter");
        
       useEffect(()=>{
        setInterval(()=>{
            setCount(c => c + 1)
        }, 1000)
        console.log("mounted");
        
       }, [])  

    function increaseCount(){
        setCount(count + 1)
    }

    // function decreaseCount(){
    //     setCount(count - 1)
    // }

    // function resetCount(){
    //     setCount(0)
    // }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>increase count</button>
        {/* <button onClick={decreaseCount}>decrease count</button>
        <button onClick={resetCount}>Reset count</button> */}

    </div>
  )
}

export default Counter
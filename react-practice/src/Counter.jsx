import { useState, useEffect } from 'react'

const Counter = () => {
    
 
    const [count, setCount] = useState(0)

      console.log("counter");
        
       useEffect(()=>{
        console.log("on mount");
        let clock = setInterval(()=>{
          console.log("from inside the server");
            setCount(c => c + 1)
        }, 1000) // this setInterval code only run once
        console.log("mounted");

        return function(){
            console.log("on unmount");
          clearInterval(clock)
        }
        
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
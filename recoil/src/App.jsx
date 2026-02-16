import React, { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atom/Counter'

const App = () => {
  
  return (
    <div>
    <RecoilRoot>
       <Counter />
    </RecoilRoot>  
      
    </div>
  )
}

function Counter(){

  return(
    <div>
      
      <CurrentCount  />
      <Increase  /> <br/>
      <Decrease />

    </div>
  )
}
function CurrentCount(){
  const count = useRecoilValue(counterAtom)
  return(
    <div>
      <p>THE COUNT IS {count}</p>
    </div>
  )
}
function Increase(){
  const setCount = useSetRecoilState(counterAtom)

  function increaseCount(){
    setCount(c => c + 1)
  }
  return(
  <div>
    <button onClick={increaseCount}>increase</button>
  </div>
  )
}

function Decrease(){

  const setCount = useSetRecoilState(counterAtom)

  function decreaseCount(){
    setCount(c => c - 1)
  }

  return(
  <div>
    <button onClick={decreaseCount}>decrease</button>
  </div>
  )
}

export default App
import { useState } from 'react'
import { Counter } from './CustomHook'
import {  useFetch, usePostTitle } from './UseFetch'
import { usePrev } from './UsePrev'

const App = () => {

  const[state , setState] = useState(0);
  const prev = usePrev(state);
  
  // const[currentPost , setCurrentPost] = useState(1);
  // const {finalData , loading } = useFetch("https://jsonplaceholder.typicode.com/todos/2" + currentPost)


  // if(loading){
  //   return(
  //     <div>
  //       LOADING.........
  //     </div>
  //   )
  // }

return (
  <div>
    <p>{state}</p>
    <button onClick={() =>{
      setState(c => c+1)
    }}>
      Click me
    </button>

    <p>The previous value was {prev}</p>




    {/* <Counter />
    <Counter />
    <Counter />
    <br/>
    <br/>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    <br/>
    {JSON.stringify(finalData)} */}



  </div>
)
}



 export default App
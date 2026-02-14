import { useState } from 'react'
import { Counter } from './CustomHook'
import {  useFetch, usePostTitle } from './UseFetch'

const App = () => {
  
  const[currentPost , setCurrentPost] = useState(1);
  const {finalData , loading } = useFetch("https://jsonplaceholder.typicode.com/todos/2" + currentPost)


  if(loading){
    return(
      <div>
        LOADING.........
      </div>
    )
  }

return (
  <div>
    <Counter />
    <Counter />
    <Counter />
    <br/>
    <br/>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    <br/>
    {JSON.stringify(finalData)}
  </div>
)
}



 export default App
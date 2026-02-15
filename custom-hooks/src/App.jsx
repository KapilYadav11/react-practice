import { useEffect, useState } from 'react'
import { Counter } from './CustomHook'
import {  useFetch, usePostTitle } from './UseFetch'
import { usePrev } from './UsePrev'
import { useDebounce } from './UseDebounce'


const App = () => {

  const[inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200)

  function change(e){
    setInputVal(e.target.value)
  }

  useEffect(() =>{
   
  console.log("debounce opeartions")
  }, [debouncedValue])

  //code 2
  // const[state , setState] = useState(0);
  // const prev = usePrev(state);
  


  //  code 1
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

    <input type="text" onChange={change}></input>

    {/* code 2 */}
    {/* <p>{state}</p>
    <button onClick={() =>{
      setState(c => c+1)
    }}>
      Click me
    </button>

    <p>The previous value was {prev}</p> */}



    {/* code 1 */}
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
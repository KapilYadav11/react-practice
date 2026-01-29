import React from 'react'
import PostComponent from './PostComponent'
import ToggleMessage from './ToggleMessage'
import Post from './Post'

const App = () => {

  function addPst() {

  }
  return (
    <div>
      {/* <ToggleMessage/> */}
      <div style={{ backgroundColor: '#bdc3c7', height: '100vh' }}>
        {/* <h1>Undestanding about the components </h1> */}
        {/* <div style={{display: 'flex', justifyContent: 'center'}}>
          <div>
            <div> <PostComponent/></div>
            <br />
            <div> <PostComponent/></div>
            <br />
            <div> <PostComponent/></div>
        </div>
          
          
        </div> */}
        <button onClick={addPst}>Add Post</button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Post />
            name={"Kapil"}
            subtitle={"10 followers"}
            time={"2m ago"}
            image={"https://tse3.mm.bing.net/th/id/OIP.983RG0ClupsMjDufJ6oHlwHaHa?pid=Api&P=0&h=180"
            }
            description={"What to know how to win big? Check out these folks won $5000 in bounties"}
fjf
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
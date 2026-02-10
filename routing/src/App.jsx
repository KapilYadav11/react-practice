import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to={"/"}>Allen</Link> <br/>
      <Link to={"/neet/online-coaching-class-11"}>Class11</Link> <br/>
      <Link to={"/neet/online-coaching-class-12"}>Class12</Link> <br/>
       <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<Errorpage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

function Errorpage(){
  return(
    <div>
      Soory page does not found❌
    </div>
  )
}
function LandingPage(){
  return(
    <div style={{color:"red", fontSize:"24px"}}>
      Welcome to this website
    </div>
  )
}

function Class11Program(){
  return(
    <div style={{color:"red", fontSize:"24px"}}>
      NEET CLASS 11 ONLINE COACHING PROGRAM
    </div>
  )
}

function Class12Program(){

  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return(
    <div style={{color:"red", fontSize:"24px"}}>
      NEET CLASS 12 ONLINE COACHING PROGRAM
      <button style={{color: "blue"}} onClick={redirectUser}>Back to Landing Page</button>
    </div>
  )
}
export default App
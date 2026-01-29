import { useEffect, useState } from "react"


const App = () => {

  const [currentTab, setCurrentTab] = useState("feed")

  useEffect(()=>{
    console.log("sending data to current tab " + currentTab);
    
  }, [currentTab])
  
  return (
    <div style={{margin: 10, padding: 20, fontSize: 20}}>
      <button  onClick={()=>setCurrentTab("feed")} style={{color: currentTab == "feed"? "red": "black"}}>feed</button>
      <button  onClick={()=>setCurrentTab("message")}style={{color: currentTab == "message"? "red": "black"}}>message</button>
      <button  onClick={()=>setCurrentTab("jobs")} style={{color: currentTab == "jobs"? "red": "black"}}>jobs</button>
      <button  onClick={()=>setCurrentTab("notification")} style={{color: currentTab == "notification"? "red": "black"}}>notification</button>
      <button  onClick={()=>setCurrentTab("contact")} style={{color: currentTab == "contact"? "red": "black"}}>contact</button>
    </div>
  )
}

export default App
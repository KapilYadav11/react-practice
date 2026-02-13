import { useContext } from "react"
import { BulbContext } from "./Context"

const BulbState = () => {
  const {lightOn} = useContext(BulbContext)
    
  return (
    <div>
       {lightOn ? "Bulb on" : "Bulb off"}
    </div>
  )
}

export default BulbState
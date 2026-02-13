import BulbState from './BulbState'
import ToggleBulbState from './ToggleBulbState'
import { useState } from "react"


const LightBulb = () => {
    const [bulbOn, setBulbOn] = useState(false)//this rolling up state
  return (
    <div>
        {/* bulbOn is the this.props to the BulbState components
        setBulbOn is the props to the ToggleBulbState components */}
        <BulbState bulbOn={bulbOn}/>
        <ToggleBulbState setBulbOn={setBulbOn}/>
    </div>
  )
}

export default LightBulb
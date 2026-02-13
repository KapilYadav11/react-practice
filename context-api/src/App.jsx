import LightBulb from './LightBulb'
import { BulbContext } from './Context'
import { useState } from 'react'

const App = () => {
  const [lightOn, setLightOn] = useState(true)
  return (
    <div>
      <BulbContext.Provider value={{
        lightOn:lightOn,
        setLightOn:setLightOn
      }}>
        <LightBulb/>
      </BulbContext.Provider>
      
    </div>
  )
}

export default App
import React, { useState } from 'react'

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
       <button onClick={()=>setIsVisible(!isVisible)}>Toggle Message</button>
       {isVisible && <p style={{color:'red'}}>This is the conditional renders Message!</p>}
    </div>
  )
}

export default ToggleMessage
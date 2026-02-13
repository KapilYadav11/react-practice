
const ToggleBulbState = ({setBulbOn}) => {
  function toggle(){
    setBulbOn(currentState => !currentState)
  }
  return (
    <div>
        <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  )
}

export default ToggleBulbState
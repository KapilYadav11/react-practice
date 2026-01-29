import React from 'react'

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"gray", borderWidth: 1, padding: 20}
const Post = ({name, subtitle, time, image, description}) => {
    
  return (
    <div style={{ style }}>
  <img
    src={image}
    style={{
      width: 30,
      height: 30,
      borderRadius: 20,
    }}
  />
  <div>
    <b>{name}</b>
    <div>{subtitle}</div>
    {time !== undefined ? (
      <div style={{ display: "flex" }}>
        <div>{time}</div>
        <img
          src={
            "https://tse3.mm.bing.net/th/id/OIP.983RG0ClupsMjDufJ6oHlwHaHa?pid=Api&P=0&h=180"
          }
          style={{ width: 12, height: 12 }}
        />
      </div>
    ) : null}
  </div>
  <div style={{ fontSize: 12}}>{description}</div>
</div>

    
  )
} 

export default Post
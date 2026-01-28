import React from 'react'

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor:"gray", borderWidth: 1, padding: 20}
const Post = ({name, subtitle, time, image, description}) => {
    
  return (
    <div style={{style}}>
        <img src={image} style={{
            width: 30,
            height: 30,
            borderRadius: 20
        }} />
        <div>
            <b>
                {name}
            </b>
            <div>{subtitle}</div>
            {(time !== undefined) ? <div></div>:null}
        </div>
    </div>
  )
}

export default Post
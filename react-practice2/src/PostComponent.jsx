import React from 'react'

const style = { width: 200, backgroundColor: "white", borderRadius: 4, display: "flex"}

const PostComponent = () => {
  return (
    <div style={{backgroundColor: 'white', width: 480, borderRadius: 16}}>
        <div style={style}>
            
            <img src="https://tse3.mm.bing.net/th/id/OIP.983RG0ClupsMjDufJ6oHlwHaHa?pid=Api&P=0&h=180"
            style={{ width: 100 , height: 100, borderRadius: 200}}
            />
            <div style={{fontSize: 20, color:"gray", padding:8}}>
                <b>
                    100xdevs
                </b>
                <div>23,868</div>
                <div>12m</div>
            </div>
        </div>
        <div style={{fontSize: 16, paddingBottom: '10px '}}>
            <h3>Work hard is the only solution of every : problem = money</h3>
        </div>
        
     </div>
        
    
  )
}

export default PostComponent
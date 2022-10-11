import React from 'react'

function Additional() {
 let color = true;

//  if(color === false){
//     return <p style={{backgroundColor:'red'}}> This is Red in Color</p>
//  }else{
//     return <p style={{backgroundColor:'yellow'}}> This is Yellow in Color</p>
//  }

return(<>
    {color===false? <p style={{backgroundColor:'red'}}> This is Red in Color</p>: <p style={{backgroundColor:'yellow'}}> This is Yellow in Color</p>}
</>
)
}

export default Additional
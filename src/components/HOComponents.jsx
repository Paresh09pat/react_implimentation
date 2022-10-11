import React from 'react'
import { useState } from 'react'

function HOComponents() {
  return (
    <div style={{textAlign:'center'}}>
    <h2>HOC</h2>
    <HOCRed cmp={Counter} />
    <HOCAqua cmp={Counter} />
    </div>
  )
}

function HOCRed(props){
    return <h2 style={{backgroundColor:'red', width:'100px', }}> Red <props.cmp /> </h2>
}
function HOCAqua(props){
    return ( <h2 style={{backgroundColor:'aqua', width:'100px'}}> Aqua <props.cmp /> 
    
     </h2>
    )
}


function Counter() {
    const [count, setCount]= useState(0); 
return(
    <>
    <h2>{count}</h2>
    <button onClick={()=> setCount(count+1)}> Updater </button>
    <button onClick={()=> setCount(count-1)}> Reducer </button>
    </>
)
}

export default HOComponents
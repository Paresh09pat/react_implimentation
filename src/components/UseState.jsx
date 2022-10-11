import React from 'react'
import { useState } from 'react'

function UseStatehook() {

    const [name, setName]= useState('Paresh')
    const [age, setAge]= useState('20')

    const changename=()=>{
        setName('Umesh')
        setAge('24')
    }
  return (
    
 <>
 <p>My name is {name} and my age is {age}</p>
 <button onClick={changename}> Click me </button>
 </>
  )
}

export default UseStatehook
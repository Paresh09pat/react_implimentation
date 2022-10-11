import React from 'react'
import { useState, useEffect } from 'react';

function UseEffectHook() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        console.log('paresh');
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000)

    },[]); // <- add empty brackets here-
  
    return <h1>I've rendered {count} times! </h1>;
  }

export default UseEffectHook
import React from 'react'
import { useState, useEffect, useLayoutEffect } from "react";

//Mount (initial state) -> update (re-render) -> Unmount

function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);

  useLayoutEffect(() => {
    if(count === 3){
      setCount(4)
    }

  }, [count])

  useEffect(() => {
    console.log('render')
  })

  // const startTime = new Date();
  // while(new Date() - startTime < 500) {
  //   console.log(new Date - startTime)
  // }

  return (
    <div className="counter">
      <button onClick={() => setBool(!bool)} >Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Counter

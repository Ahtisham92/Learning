import { useState } from "react";

import React from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  return (
    <div className="counter">
      <button onClick={() => setBool(!bool)} >Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment01</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Counter

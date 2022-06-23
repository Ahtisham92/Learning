import { useState } from "react";
import Counter from "./component/Counter";
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}
        style={{margin: '1rem 0'}}
      > { show ? 'Hide' : 'Show'} Counter</button>
      { show && <Counter />} 
    </div> 
  );
}

export default App;

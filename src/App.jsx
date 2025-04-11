import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='maindiv'>
      <h1>Hey there</h1>
      <div className='childdiv'>
        <button  className='btn' onClick={ () => setCount(count+1) }>+1</button>
        <button className='btn' onClick={ () => count > 0 ? setCount(count-1) : '' }>-1</button>
      </div>
      <p>Count : {count}</p>
      <button className='resetbtn' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
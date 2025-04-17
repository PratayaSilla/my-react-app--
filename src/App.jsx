import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)

  const bgColors = ['#f6d365', '#a1c4fd', '#c2e9fb', '#fbc2eb', '#d4fc79']

  const changeBackground = () => {
    const nextIndex = (bgIndex + 1) % bgColors.length
    setBgIndex(nextIndex)
  }

  // Apply background color to root element
  useEffect(() => {
    document.getElementById('root').style.background = bgColors[bgIndex]
  }, [bgIndex])

  return (
    <div className='maindiv'>
      <h1>Hey there</h1>
      <div className='childdiv'>
        <button className='btn' onClick={() => setCount(count + 1)}>+1</button>
        <button className='btn' onClick={() => count > 0 ? setCount(count - 1) : ''}>-1</button>
      </div>
      <p>Count : {count}</p>
      <button className='resetbtn' onClick={() => setCount(0)}>Reset</button>
      <button className='bgbtn' onClick={changeBackground}>Change Background</button>
    </div>
  )
}

export default App

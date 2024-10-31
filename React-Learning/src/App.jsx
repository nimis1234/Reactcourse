import { useState } from 'react'
import Welcome from './Welcome'
import Counter from './Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
      <Counter />
    </>
  )
}

export default App

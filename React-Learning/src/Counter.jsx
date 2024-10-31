import React, { useState } from 'react';

 function Counter() {
    const [counter, setCount] = useState(0)

    const increment = () => {
        setCount(counter + 1)
        //setCount((prevCount) => prevCount + 1) this to get the prev value and adding one to this ie output will be 2
    }
    const decrement = () => {
        setCount(counter - 1)
        //setCount((prevCount) => prevCount - 1)
    }

  return (
    <>
    <div align="center" style={{ margin: '10px' }} >
        <p style={{ fontSize: '20px', textAlign: 'center' }}>
            Counter Value :{counter} 
         </p>
         <button onClick={increment}>Increment Counter Value</button> {""}
         <button onClick={decrement}>Decrement Counter Value</button> 
    </div>
    </>
  )
}
export default Counter

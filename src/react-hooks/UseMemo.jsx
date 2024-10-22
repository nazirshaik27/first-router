import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(2);
    const multiply = useMemo(function multi(){
        console.log("Multi function count State")
        return count * 2
    },[count])
    
  return (
    <>
      <h2>UseMemo Hook</h2>
      <h3>{count}</h3>
      <h3>{multiply}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <h3>{data}</h3>
      <button onClick={() => setData(data * 10)}>update count</button>
    </>
  )
}

export default UseMemo

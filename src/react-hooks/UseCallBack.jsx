import React, { useCallback, useState } from 'react'
import ExampelCallBack from './ExampelCallBack';

const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    const newData = useCallback(() => {
        console.log("New Data component", item)
    },[item])
  return (
    <>
      <h2>UseCallBack Hook </h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <br />
      <ExampelCallBack item={item} data={newData} />
      <button onClick={() => setItem(count * 1)}>Item Update</button>
    </>
  )
}

export default UseCallBack

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
            const result = await resp.json();
            console.table(result);
        }

        fetchData();
    },[])
  return (
    <div>
      <h2 className='text-3xl'>{count}</h2>
      <button onClick={() => setCount(count + 1)} className='bg-red-700 py-4 px-4 text-white text-2xl rounded'>Count</button>
    </div>
  )
}

export default UseEffect

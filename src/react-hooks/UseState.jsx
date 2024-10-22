import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0);
    // let counter = 0;
    const increase = () => {
        // counter++;
        setCounter(counter + 1);
        console.log("increase fun", counter)
    }
    const decrease = () => {
        // counter--;
        setCounter(counter - 1);
        console.log("decrease fun", counter)
    }
  return (
    <div>
    <h2 className='text-3xl'>{counter}</h2>
      <button onClick={increase} className='bg-indigo-500 py-4 px-4 text-white text-2xl mr-4 rounded'>Increase</button>
      <button onClick={decrease} className='bg-sky-500 py-4 px-4 text-white text-2xl rounded'>Decrease</button>
    </div>
  )
}

export default UseState

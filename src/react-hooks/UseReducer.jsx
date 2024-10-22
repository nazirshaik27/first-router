import React, { useReducer } from 'react'

const UseReducer = () => {
    const countReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT": 
            return {count: state.count + 1};
             case "DECREMENT":
                return state.count > 0 ?{ count: state.count - 1} : state;   
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(countReducer, {count:0})
  return (
    <div>
      <h2 className='text-4xl'>{state.count}</h2>
      <button onClick={() => dispatch({type:"INCREMENT"})} className='bg-indigo-500 py-4 px-4 text-white text-2xl mr-4 rounded'>Increment</button>
      <button onClick={() => dispatch({type:"DECREMENT"})} className='bg-red-700 py-4 px-4 text-white text-2xl rounded'>Decrement</button>
    </div>
  )
}

export default UseReducer

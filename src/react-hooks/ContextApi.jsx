import React, { useState, createContext } from 'react'
import ContextApiFirstChild from './ContextApiFirstChild'


//ContextApi Three Terms work Create, Provide, Use
export const myData = createContext();
const ContextApi = () => {
    const [data, setData] = useState(1);
    const [salary, setSalary] = useState();
    
    const mySalary = (val) => {
     console.log("Salary is: ", val);
     setSalary(val)
    }
  return (
    <myData.Provider value={{valueData:data, mySalary:mySalary}}>
    <>
      <h2>Context Api</h2> 
      <h2>Context APi Second Child Salary: {salary}</h2>
      <button onClick={() => setData(data + 1)}>Update Data</button>
      <ContextApiFirstChild />
    </>
    </myData.Provider>
  )
}

export default ContextApi

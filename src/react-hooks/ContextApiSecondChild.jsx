import React, { useContext } from 'react'
import { myData } from './ContextApi';

const ContextApiSecondChild = () => {
    const { valueData, mySalary} = useContext(myData);
    const salary = 500000;

  return (
    <>
      <h2>Context Api Second Child</h2>
      <h2>ValueData Second Child: {valueData}</h2>
      <button onClick={() => mySalary(salary)}>Salary</button>
    </>
  )
}

export default ContextApiSecondChild

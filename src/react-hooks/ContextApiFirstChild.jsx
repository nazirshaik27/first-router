import React, {useContext} from 'react'
import ContextApiSecondChild from './ContextApiSecondChild'
import { myData } from './ContextApi';

const ContextApiFirstChild = () => {
    const {valueData} = useContext(myData)
  return (
    <>
      <h2>Context Api First Child</h2>
      <h2>Value Data First Child: {valueData}</h2>
      <ContextApiSecondChild />
    </>
  )
}

export default ContextApiFirstChild

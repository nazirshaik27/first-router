import React from 'react'
import ChildToParent from './ChildToParent'

const LiftingStateUp = () => {

    function sayHello () {
        alert("Hello Menu")
    }
  return (
    <>
      <h2>Lifting State Hook</h2>
      <ChildToParent item={sayHello}/>
    </>
  )
}

export default LiftingStateUp

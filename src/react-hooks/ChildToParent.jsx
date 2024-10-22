import React from 'react'

const ChildToParent = (props) => {
    let name = "Nazeer"
  return (
    <>
      <h2>Child To Parent</h2>
      <button onClick={() => props.item(name)}>Click</button>
    </>
  )
}

export default ChildToParent

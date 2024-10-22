import React, { memo } from 'react'

const ExampelCallBack = (props) => {
    console.log("Hii Child component", props);
  return (
    <>
      <h2>Callback Exampel: {props.item}</h2>
      <h2>Callback data: {props.data}</h2>
    </>
  )
}

export default memo (ExampelCallBack);

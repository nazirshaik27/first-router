import React from 'react'
import UseMemo from '../react-hooks/UseMemo'
import UseCallBack from '../react-hooks/UseCallBack'
import LiftingStateUp from '../react-hooks/LiftingStateUp'
import ContextApi from '../react-hooks/ContextApi'
import Constructor from '../react-hooks/Constructor'
import Render from '../react-hooks/Render'
import ComponentDidMount from './ComponentDidMount'
import ComponentDidUpdate from './ComponentDidUpdate'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      {/* <UseMemo />
      <UseCallBack /> */}
      {/* <LiftingStateUp /> */}
      {/* <ContextApi /> */}
      <Constructor />
      <Render />
      <ComponentDidMount />
      <ComponentDidUpdate />
    </div>
  )
}

export default Contact

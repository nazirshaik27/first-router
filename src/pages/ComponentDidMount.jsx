import React, { Component } from 'react'

export class ComponentDidMount extends Component {
    constructor(){
        super();
        console.log("COnstrouctor")
    }

    componentDidMount(){
        console.log("Component didmount")
    }
  render() {
    console.log("Render Method")
    return (
      <>
        <h2>Component did mount | life cycle method</h2>
      </>
    )
  }
}

export default ComponentDidMount

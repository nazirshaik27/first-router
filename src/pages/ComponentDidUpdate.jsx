import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log("Constructor");
        this.state = {
            count : 0
        }

    }
    componentDidUpdate(){
        console.log('Component Did Update')
    }
  render() {
    console.log('render')
    return (
      <div>
        <h2>Life cycle method | Component Updae</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({count: 1 })}>Count</button>
      </div>
    )
  }
}

export default ComponentDidUpdate

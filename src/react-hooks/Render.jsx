import { Component } from "react"

export default class Render extends Component {
    constructor(){
        super();
        this.state = {
            dep : "CS"
        }
    }
  render () {
    return (
        <>
        <h2>Life cycle Render</h2>
        <h3>Deportment: {this.state.dep}</h3>
        <button onClick={() => this.setState({dep: "IT"})}>Update</button>
        </>
    )
  }
}
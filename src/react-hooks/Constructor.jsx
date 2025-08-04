import { Component } from "react";


export default class Constructor extends Component {
    constructor(){
        super();
        this.state = {
            name: "Nazeer Hussain"
        }
    }
    render (){
        return (
            <>
             <h2>Life cycle method</h2>
             <h3>Name: {this.state.name}</h3>
            </>
        )
    }
}
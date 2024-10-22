import React, {  PureComponent } from 'react';

class ClassComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    render(){
        console.log("Re-Rendering");
        return(
            <>
            <h1>Class Component</h1>
            <h2>Pure Component: {this.state.count}</h2>
            <button onClick={() => this.setState({count:this.state.count + 1})}>Counter</button>
            </>
        )
    }
}

export default ClassComponent;
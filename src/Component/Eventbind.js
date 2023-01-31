import React, { Component } from 'react'

export class Eventbind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Message: 'Hello'
        }
    }

    ChangeHandler = () => {
        this.setState({
            Message: "Hii"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                <button onClick={this.ChangeHandler}>click</button>
            </div>
        )
    }
}

export default Eventbind

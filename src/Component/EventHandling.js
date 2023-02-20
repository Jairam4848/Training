import React, { Component } from 'react'

export default class EventHandling extends Component {

  constructor(props){
    super(props)
  }

  submit(event){
    // alert("Success" + event)
    console.log(event)  
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.submit(e)}>Click me</button>
      </div>
    )
  }
}

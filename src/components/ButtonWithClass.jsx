import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
      super()
      this.state = {
          key1: "This is the default state of a class component.",
          key2: 0
      }
  }

/*  ButtonOnClick = () => {
    this.setState({
        key1: "This is the NEW state of a class component."
    });
    } */ 

  render() {
    return (
    <>
      <div>{this.state.key1}</div>

      <div>{this.state.key2}</div>

      {/* <button onClick={this.ButtonOnClick}>Click me</button> */}

      <button onClick={() => this.setState({key1: "This is the NEW state of a class component."})}>Click me</button>

      <button onClick={() => this.setState({key2: 1})}>Click me</button>
    </>
    )
  }
}

export default ButtonWithClass
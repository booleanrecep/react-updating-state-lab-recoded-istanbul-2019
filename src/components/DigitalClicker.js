// Code DigitalClicker Component Here
import React from "react"
class DigitalClicker  React.Component{
  constructor(props){
    super(props)
    this.state={
      timesClicked:0
    }
  }
  
  handleClick=()=>{
    this.setState(prevState=>{
      timesClicked:prevState.timesClicked+1
    })
  }
  render(){
    return(
      
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
      
      )
  }
}

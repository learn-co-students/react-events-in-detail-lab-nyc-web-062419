// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton extends React.Component {
  handleClick = e => {
    let xCord = e.clientX
    let yCord = e.clientY
    this.props.onReceiveCoordinates([xCord, yCord])
  }

  render() {
    return <button onClick={this.handleClick}>Coordinate Button</button>
  }
}

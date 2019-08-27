// Code CoordinatesButton Component Here
import React, { PureComponent } from "react"

export default class CoordinatesButton extends PureComponent {
  handleClick = event => {
    // debugger
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return <button onClick={this.handleClick}>Press me</button>
  }
}

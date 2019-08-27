// Code CoordinatesButton Component Here
import React, { Component } from "react";
class CoordinateButton extends Component {
  state = {};
  handleClick = e => {
    const arr = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(arr);
  };
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }
}

export default CoordinateButton;

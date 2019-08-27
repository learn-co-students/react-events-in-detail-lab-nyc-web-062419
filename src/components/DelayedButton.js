// Code DelayedButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.set = {
  //       delay: this.props.delay
  //     };
  //   }
  handler = event => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };
  render() {
    return <button onClick={this.handler}></button>;
  }
}

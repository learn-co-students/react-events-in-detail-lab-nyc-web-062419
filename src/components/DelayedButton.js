// Code DelayedButton Component Here
import React, { PureComponent } from "react"

export default class DelayedButton extends PureComponent {
  // handleClick = event => {
  //   event.persist
  //   setTimeout(() => {
  //     this.props.onDelayedClick(event)
  //   }, this.props.delay)
  // }

  handleClick = event => {
    debugger
    event.persist()
    // const eventSave = event
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return <button onClick={this.handleClick}>Delay Button</button>
  }
}

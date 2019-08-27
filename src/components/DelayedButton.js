// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component {

    click = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.click}>Delayed</button>
        )
    }
}

export default DelayedButton
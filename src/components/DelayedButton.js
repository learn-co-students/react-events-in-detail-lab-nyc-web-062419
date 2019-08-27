// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            onDelayedClick: props.onDelayedClick,
            delay: props.delay
        }
    }
    handleClick = (event) => {
        event.persist()
        return setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        
    }
    render(){
        return (<button onClick={this.handleClick}></button>)
    }
}
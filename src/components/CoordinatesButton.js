// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            onReceiveCoordinates: props.onReceiveCoordinates
        }
    }
    handleClick = (e) => {
        let mouseCoordinates = []
        mouseCoordinates.push(e.clientX)
        mouseCoordinates.push(e.clientY)
        return this.props.onReceiveCoordinates(mouseCoordinates)
    }
    render(){
        return (<button onClick={this.handleClick}></button>)
    }
}
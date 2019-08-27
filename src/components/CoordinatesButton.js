// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    render(){
        this.handleClick = (e) => {
            let arr = []
            arr.push(e.clientX)
            arr.push(e.clientY)
            this.props.onReceiveCoordinates(arr)
        }
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}

export default CoordinatesButton
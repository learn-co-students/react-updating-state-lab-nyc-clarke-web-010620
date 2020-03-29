// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends React.Component {
    
    constructor() {
        super() 
        this.state = {timesClicked:0}
    }

    handleClick = () => {
            this.setState(prevState => ({
                timesClicked: ++prevState.timesClicked
            }), () => console.log(this.state.timesClicked) )
    }

    render() {
        console.log(this.state.timesClicked)
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )    
    }
} 
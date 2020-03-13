import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleOnClick = () => {
        this.setState(
            previousState => {
                return {timesClicked: previousState.timesClicked + 1}
            }
        )
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
        )
    }

}


export default DigitalClicker;
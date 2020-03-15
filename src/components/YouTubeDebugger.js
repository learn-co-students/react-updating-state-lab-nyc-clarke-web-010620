// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    clickHandler = (event) => {
        console.log(event)
        if (event.target.className === "bitrate") {
            this.setState({
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            })
        } else {
            this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            })
        }
    }

    render() {

        return (
            <div>
                <button className="bitrate" onClick={this.clickHandler}> {this.state.settings.bitrate} </button>
                <button className="resolution" onClick={this.clickHandler}> {this.state.settings.video.resolution} </button>
            </div>

        )
    }
}

export default YouTubeDebugger
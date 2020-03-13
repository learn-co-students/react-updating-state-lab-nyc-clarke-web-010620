import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        "errors": [],
        "settings": {
            "bitrate": 8,
            "video": {
                "resolution": "1080p"
            }
        },
        "user": null
    }

    handleClick = e => {
        this.setState( { "settings": {
            ...this.state.settings, 
            "bitrate": 12
            }
        })
    }

    handleOtherClick = e => {
        this.setState( { "settings": {
            ...this.state.settings, 
            "video": {
                "resolution": "720p"
            }
        }})

    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>
                Bitrate
                </button>
                <button className="resolution" onClick={this.handleOtherClick}>
                Resolution
                </button>    
            </div>
        )
    }
}
export default YouTubeDebugger

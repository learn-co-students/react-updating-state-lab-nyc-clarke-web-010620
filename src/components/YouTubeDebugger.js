import React from 'react'

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

      handleOnClick = () => {
          this.setState({
              settings: {
              ...this.state.settings, bitrate: 12
            }
          })
      }

      handleOnClicktwo = () => {
        this.setState({
            settings: {
            ...this.state.settings, video: {
                resolution: '720p'
            }
          }
        })
    }


    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleOnClick}>Change Bitrate</button>
                <button className="resolution" onClick={this.handleOnClicktwo}>Resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger 
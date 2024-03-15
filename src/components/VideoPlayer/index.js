import { Component } from "react";

import ReactPlayer from "react-player";

import "./index.css";

const videoURL = "https://youtu.be/jg5d59ligW4?si=XuBRHgSdeQ2AyIkC";

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  };

  onClickPlay = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
  };

  render() {
    const { isPlaying } = this.state;
    const btnText = isPlaying ? "Video Started" : "Buy";

    return (
      <div className="video-container">
        <div className="responsive-container">
          <ReactPlayer
            url={videoURL}
            playing={isPlaying}
            height={200}
            width={300}
          />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    );
  }
}

export default VideoPlayer;

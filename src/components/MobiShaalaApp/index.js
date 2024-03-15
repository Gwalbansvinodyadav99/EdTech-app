import { Component } from "react";

import { IoLogoWhatsapp } from "react-icons/io";
import VideoPlayer from "../VideoPlayer";
import "./index.css";

class MobiShaalaApp extends Component {
  state = { istext: false, isDownloadText: false, onTalk: false };
  onClickbtn = () => {
    this.setState((prevState) => ({
      istext: !prevState.istext,
    }));
  };

  onClickDownloadbtn = () => {
    this.setState((prevState) => ({
      isDownloadText: !prevState.isDownloadText,
    }));
  };

  onClickTalkdbtn = () => {
    this.setState((prevState) => ({
      onTalk: !prevState.onTalk,
    }));
  };

  render() {
    const { istext, isDownloadText, onTalk } = this.state;
    const startText = istext ? "Started" : "Get Started";
    const downLoadText = isDownloadText ? "Downloaded" : "Download App";
    const onTalkText = onTalk ? "You Did it" : "Talk To Us";
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="mobishaala-details-container">
            <h1 className="main-heading">MobiShaala</h1>
            <p className="description">
              Create Your
              <span> Digital ClassRoom</span>
              in 5 mins for
              <span> Free </span>& connect to 1+ millions Students
            </p>
            <ul className="list-con">
              <li className="list-item">No Technical Knowledge required.</li>
              <li className="list-item">
                Quickly setup live Class, tests,notes,ebooks and more.
              </li>
              <li className="list-item">
                Reach out to millions of students anyWhere,anytime.
              </li>
            </ul>
            <div className="btn-con">
              <h2>Institute/teacher</h2>
              <button type="button" className="btn" onClick={this.onClickbtn}>
                {startText}
              </button>
            </div>
            <div className="btn-con">
              <h2>Student</h2>
              <button
                type="button"
                className="btn"
                onClick={this.onClickDownloadbtn}
              >
                {downLoadText}
              </button>
            </div>
            <button
              type="button"
              className="whatsApp-btn"
              onClick={this.onClickTalkdbtn}
            >
              <IoLogoWhatsapp size={25} color="#90EE90" />
              <p className="whatsApp-btn-name">{onTalkText}</p>
            </button>
          </div>
          <div className="video-player-container">
            <VideoPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default MobiShaalaApp;

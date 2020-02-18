import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';
import './index.css';
import ModalVideo from 'react-modal-video';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    const { data } = this.props;
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={data.videoId} onClose={() => this.setState({ isOpen: false })} />
        <button className="btn-video" onClick={this.openModal}>
          Open Video
        </button>
      </div>
    );
  }
}

export default Video;

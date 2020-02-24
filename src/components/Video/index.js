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
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { data } = this.props;
    return (
      <div className="video-block text-center">
        <h2 className="h3 mb-3 ohra">Видео</h2>
        <p className="max-w-550 p-2 mx-auto h6 text-center">Биография автора и известные работы архитектора в одном видео</p>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={data.videoId} onClose={this.closeModal} />
        <button className="btn-video btn-xxl btn-yellow" onClick={this.openModal}>
          Open video
        </button>
      </div>
    );
  }
}

export default Video;

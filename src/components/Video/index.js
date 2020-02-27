import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';
import './index.css';
import ModalVideo from 'react-modal-video';
import Button from '../Button';

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
    const {
      data, title, description, buttonText,
    } = this.props;
    return (
      <div className="video-block pt-5 pb-5 text-center">
        <h2 className="h3 mb-3 ohra container">{title}</h2>
        <p className="max-w-550 p-2 mx-auto h6 text-center p-video">{description}</p>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={data.videoId}
          onClose={this.closeModal}
        />
        <Button
          type="button"
          btnAdditionalClasses="btn-xxl btn-yellow"
          content={buttonText}
          onClickCallback={this.openModal}
        />
      </div>
    );
  }
}

export default Video;

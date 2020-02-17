import React from 'react';
import './index.css';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
import Timeline from '../../components/Timeline';
import Works from '../../components/Works';
import ImageGalleryComponent from '../../components/ImageGallery';
import Video from '../../components/Video';
import MapContainer from '../../components/Map';
import data from '../../data/people';

function PersonalPage(props) {
  const profile = data[props.person];
  return (
    <div className="personal-page">
      <Avatar data={profile} />
      <Description data={profile} />
      <Timeline data={profile} />
      <Works data={profile} />
      <ImageGalleryComponent data={profile} />
      <Video data={profile} />
      <MapContainer data={profile} />
    </div>
  );
}

export default PersonalPage;

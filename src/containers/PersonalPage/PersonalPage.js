import React from 'react';
import './PersonalPage.css';
import Avatar from '../../components/Avatar/Avatar'
import Description from '../../components/Description/Description';
import Timeline from '../../components/Timeline/Timeline';
import Works from '../../components/Works/Works';
import ImageGalleryComponent from '../../components/ImageGallery/ImageGallery';
import MapContainer from '../../components/Map/Map';
import data from '../../data/people';

function PersonalPage(props) {
  let profile = data[props.person];
  return (
    <div className="personal-page">
      <Avatar data={profile}/>
      <Description data={profile}/>
      <Timeline data={profile}/>
      <Works data={profile}/>
      <ImageGalleryComponent data={profile}/>
      <MapContainer data={profile}/>
    </div>
  );
}

export default PersonalPage;
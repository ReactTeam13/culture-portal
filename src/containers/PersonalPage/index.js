import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
import Timeline from '../../components/Timeline';
import Works from '../../components/Works';
import ImageGalleryComponent from '../../components/ImageGallery';
import Video from '../../components/Video';
// eslint-disable-next-line import/no-named-as-default
import MapContainer from '../../components/Map';

function PersonalPage({ profile }) {
  const { t } = useTranslation('personPage');
  return (
    <div className="personal-page">
      <Avatar data={profile} />
      <Description data={profile} />
      <Timeline
        data={profile}
        title={t('timelineTitle')}
        description={t('timelineDescription')}
      />
      <Works
        data={profile}
        title={t('listWork')}
        date={t('dateCreate')}
        work={t('workCreate')}
      />
      <ImageGalleryComponent data={profile} title={t('galleryTitle')} />
      <Video
        data={profile}
        title={t('videoTitle')}
        description={t('videoDescription')}
        buttonText={t('videoButton')}
      />
      <div className="map-container">
        <MapContainer data={profile} />
      </div>
    </div>
  );
}

export default PersonalPage;

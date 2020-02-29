import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';
import Avatar from '../../components/Avatar';
import DescriptionShort from '../../components/DescriptionShort';
import Timeline from '../../components/Timeline';
import Works from '../../components/Works';
import ImageGallery from '../../components/ImageGallery';
import Video from '../../components/Video';
// eslint-disable-next-line import/no-named-as-default
import MapContainer from '../../components/Map';

function PersonalPage({ profile }) {
  const { t } = useTranslation('personPage');
  return (
    <div className="personal-page">
      <div className="background-dark">
        <div className="container row pt-5 pb-5 m-auto">
          <div className="col-md-5 text-center">
            <Avatar data={profile} />
          </div>
          <div className="col-md-5">
            <DescriptionShort
              data={profile}
              isDescriptionFull
            />
          </div>
        </div>
      </div>
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
      <ImageGallery data={profile} title={t('galleryTitle')} />
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

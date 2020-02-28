import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageGallery from './index';
import data from '../../data/architects';

storiesOf('ImageGallery', module)
  .add('ImageGallery UI representation', () => (
    <ImageGallery
      data={data[0].ru}
      title="Фотоальбом"
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import Video from './index';
import data from '../../data/architects'

storiesOf('Video', module)
  .add('Video UI representation', () => (
    <Video
        data={data[0].ru}
        title="Видео"
        description="Нажмите 'Смотреть', что бы вопсроизвести видео"
        buttonText="Смотреть"
    />
  ));

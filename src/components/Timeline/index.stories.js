import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeLine from './index';
import data from '../../data/architects'

storiesOf('TimeLine', module)
  .add('TimeLine UI representation', () => (
    <TimeLine
        data={data[1].ru}
    />
  ));

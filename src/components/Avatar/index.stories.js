import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './index';
import data from '../../data/architects'

storiesOf('Avatar', module)
  .add('Avatar UI representation', () => (
    <Avatar
        data={data[0].ru}
    />
  ));

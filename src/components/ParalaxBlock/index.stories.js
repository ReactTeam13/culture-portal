import React from 'react';
import { storiesOf } from '@storybook/react';

import ParalaxBlock from './index';

storiesOf('ParalaxBlock', module)
  .add('ParalaxBlock UI representation', () => (
    <ParalaxBlock
      text="КУЛЬТУРНЫЙ ПОРТАЛ об известных архитекторах Беларуси"
    />
  ));

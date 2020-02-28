import React from 'react';
import { storiesOf } from '@storybook/react';

import StyleBlock from './index';
import data from '../../data/architects';

storiesOf('StyleBlock', module)
  .add('StyleBlock UI representation', () => (
    <StyleBlock />
  ));

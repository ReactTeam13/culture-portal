import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './index';

storiesOf('Title', module)
  .add('Title ohra', () => (
    <Title
      text="My ohra centre title"
    />
  ));

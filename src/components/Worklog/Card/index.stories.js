import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';

storiesOf('Card', module)
  .add('Card', () => (
    <Card
      src="https://image.flaticon.com/icons/svg/28/28511.svg"
      title="My title"
      p="Some description"
    />
  ));

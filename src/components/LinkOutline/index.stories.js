import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkOutline from './index';

storiesOf('LinkOutline', module)
  .add('LinkOutline', () => (
    <LinkOutline
      src="https://github.com/"
    >
      github
    </LinkOutline>
  ));

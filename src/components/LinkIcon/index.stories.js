import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkIcon from './index';

storiesOf('LinkIcon', module)
  .add('LinkIcon', () => (
    <LinkIcon
      src="https://github.com/"
      icon="https://image.flaticon.com/icons/svg/733/733553.svg"
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('Button', () => (
    <Button
      type="button"
      content="click me"
    />
  ))
  .add('Button disabled', () => (
    <Button
      type="button"
      content="click me"
      isDisabled
    />
  ));

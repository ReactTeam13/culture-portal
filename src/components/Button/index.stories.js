import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('Button', () => (
    <Button
      type="button"
      content="click me"
      onClickCallback={(e) => { console.warn(e.target); }}
    />
  ))
  .add('Button disabled', () => (
    <Button
      type="button"
      content="click me"
      isDisabled
      onClickCallback={(e) => { console.warn(e.target); }}
    />
  ));

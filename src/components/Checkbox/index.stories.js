import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './index';


storiesOf('Checkbox', module)
  .add('Checkbox is not checked', () => (
    <Checkbox />
  ))
  .add('Checkbox is checked', () => (
    <Checkbox isChecked="true" />
  ));

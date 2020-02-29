import React from 'react';
import { storiesOf } from '@storybook/react';
import Ceckbox from './index';


storiesOf('Ceckbox', module)
  .add('Ceckbox is not checked', () => (
    <Ceckbox />
  ))
  .add('Ceckbox is checked', () => (
    <Ceckbox isChecked='true' />
  ))
import React from 'react';
import { storiesOf } from '@storybook/react';

import DescriptionShort from './index';
import data from '../../data/architects';
import Button from '../Button';

const button = (
  <Button
    type="button"
    btnAdditionalClasses="btn-primary btn-xxl"
    content="Читать"
  />
);

storiesOf('DescriptionShort', module)
  .add('Short description UI representation', () => (
    <DescriptionShort
      data={data[0].ru}
    />
  ))
  .add('Short description with button UI representation', () => (
    <DescriptionShort data={data[0].ru}>
      {button}
    </DescriptionShort>
  ))
  .add('Full description UI representation', () => (
    <DescriptionShort
      data={data[0].ru}
      isDescriptionFull
    />
  ));

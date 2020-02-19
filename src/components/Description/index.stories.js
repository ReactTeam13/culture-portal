import React from 'react';
import { storiesOf } from '@storybook/react';

import Description from './index';


const data = {
  name: 'Иван Иванов', 
  occupation: 'архитектор', 
  birthDate: '1900', 
  deathDate: '1990', 
  birthPlace: 'Минск',
};


storiesOf('Description', module)
  .add('Description', () => (
    <Description data={data} />
  ));

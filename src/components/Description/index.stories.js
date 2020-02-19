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
    <div className="description">
    <h1 className="name">{ data.name }</h1>
    <p className="occupation">{ data.occupation }</p>
    <p className="years">
      Годы жизни:
      <span>{ data.birthDate }</span>
      {' '}
      -
      <span>{ data.deathDate }</span>
    </p>
    <p className="birth-place">
      Место рождения:
      <span>{ data.birthPlace }</span>
    </p>
  </div>
  ));

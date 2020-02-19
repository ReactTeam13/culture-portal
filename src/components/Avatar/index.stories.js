import React from 'react';
import { storiesOf } from '@storybook/react';
import imageFile from '../../img/person1/avatar/ava.jpg';

import Avatar from './index';

export default {
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <div className="avatar-container">
    <img src={image.src} alt={image.alt} />
  </div>
  ));
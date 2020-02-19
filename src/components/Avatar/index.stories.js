import React from 'react';
import { storiesOf } from '@storybook/react';
import imageFile from '../../img/person1/avatar/ava.jpg';

import Avatar from './index';

export default {
  title: 'img',
};

const data = {
  avatar: imageFile,
  name: 'my image',
};

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <Avatar data={data} />
  ));
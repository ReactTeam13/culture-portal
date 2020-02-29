import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './index';

const list = [
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2040&q=80',
  'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
]

const description = [
  'nature1',
  'nature2',
  'nature3',
]

storiesOf('Carousel', module)
  .add('Carousel', () => (
    <Carousel
      list={list}
      description={description}
    />
  ));

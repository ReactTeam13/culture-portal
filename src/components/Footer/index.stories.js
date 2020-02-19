import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './index';

storiesOf('Footer', module)
  .add('Footer', () => (
    <footer>
    <p>© 2020 - Белорусский культурный портал</p>
    <p>Выполнено с любовью по заказу The Rolling Scope School</p>
  </footer>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../configs/i18next';
import LanguageControl from './index';
import { languages } from '../../translations';

console.log(languages);

storiesOf('LanguageControl', module)
  .add('LanguageControl', () => (
    <LanguageControl languages={languages} />
  ));

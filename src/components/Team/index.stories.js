import React from 'react';
import { storiesOf } from '@storybook/react';

import TeamBlockPhoto from './TeamBlockPhoto/index';
import TeamMember from './TeamMember/index';
import TeamTitle from './TeamTitle/index';
import data from '../../data/teamData';

storiesOf('TeamBlock', module)
  .add('TeamTitle UI representation', () => (
    <TeamTitle titleData={data.ru.title} />
  ))
  .add('TeamBlockPhoto UI representation', () => (
    <TeamBlockPhoto />
  ))
  .add('TeamMember UI representation', () => (
    <TeamMember
      data={data.ru.team[1]}
    />
  ));

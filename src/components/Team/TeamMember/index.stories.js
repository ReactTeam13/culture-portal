import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMemeber from './index';

const githubIcon = 'https://image.flaticon.com/icons/svg/733/733553.svg';

storiesOf('TeamMemeber', module)
  .add('TeamMemeber', () => (
    <TeamMemeber
      data={{
        id: 0,
        position: 'Position',
        name: 'Name',
        contribution: 'Contribution',
        githubId: 'Nasta313',
        links: [
          {
            name: 'github',
            src: 'https://github.com/',
            icon: githubIcon,
          },
        ],
      }}
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamMemeber from './index';

storiesOf('TeamMemeber', module)
  .add('TeamMemeber', () => (
    <div style={{ width: '400px' }}>
    <TeamMemeber
      data={{
        id: 0,
        position: 'Position',
        name: 'Name',
        contribution: 'Contribution',
        githubId: 'github-default-response',
        links: [
          {
            name: 'facebook',
            src: 'https://www.facebook.com/',
            icon: 'https://image.flaticon.com/icons/svg/1384/1384053.svg',
          },
        ],
      }}
    />
    </div>
  ));

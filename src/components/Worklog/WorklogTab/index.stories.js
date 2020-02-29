import React from 'react';
import { storiesOf } from '@storybook/react';
import WorklogTab from './index';


const data= [
      {
        data: [
          [ 'First tr', 'Second tr'],
          [ 'First tr', 'Second tr'],
          [ 'First tr', 'Second tr'],
          [ 'First tr', 'Second tr'],
        ],
        name: 'Neme of my tabte',
      }

    ]

storiesOf('WorklogTab', module)
  .add('WorklogTab', () => (
    <WorklogTab
      data={data}
    />
  ));

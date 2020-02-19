import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamAvatar from './index';


storiesOf('TeamAvatar', module)
  .add('TeamAvatar', () => (
    <div style={{ width: '200px' }}>
      <TeamAvatar
        src="https://live.staticflickr.com/2922/14402577354_8934fc6c5d_h.jpg"
      />
    </div>
  ));

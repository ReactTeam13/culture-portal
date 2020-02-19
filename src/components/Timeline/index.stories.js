import React from 'react';
import { storiesOf } from '@storybook/react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import Timeline from './index';

const index = 1;
const item = {
  date: '1990',
  place: 'Минск',
  description: 'Описание деятельности'
};

storiesOf('Timeline', module)
  .add('Timeline', () => (
    <div>
      <h2>Биография архитектора</h2>

          <TimelineItem
            key={index}
            dateText={item.date}
            dateInnerStyle={{ background: '#e86971', color: '#fff' }}
          >
            <h3>{item.place}</h3>
            <p>{item.description}</p>
          </TimelineItem>

    </div>
  ));

import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './index.css';

function TimeLine({ data }) {
  return (
    <div>
      <h2>Биография архитектора</h2>
      <Timeline lineColor="#ddd">
        {data.activity.map((item, index) => (
          <TimelineItem
            key={index}
            dateText={item.date}
            dateInnerStyle={{ backgroundColor: '#d7b87b', color: '#fff' }}
          >
            <h3 className="date-line-place">{item.place}</h3>
            <p>{item.description}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}


export default TimeLine;

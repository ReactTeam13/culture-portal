import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './index.css';

function TimeLine({ data, title, description }) {
  return (
    <div className="container">
      <h2 className="h3 mb-4 mt-5 pr-3 pl-3 ohra">{title}</h2>
      <p className="max-w-550 p-2 mx-auto text-center">{description}</p>
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

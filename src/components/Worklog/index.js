import React from 'react';
import ParallaxCircle from '../Parallax/Circle';
import WorklogTab from './WorklogTab/index';
import t from '../../data/worklog';
import './index.css';


function Worklog() {
  return (
    <div>
      <ParallaxCircle
        text="worklog"
      />
      <WorklogTab data={t.ru.data} />
      <div style={{ height: '400px' }} />
    </div>

  );
}

export default Worklog;

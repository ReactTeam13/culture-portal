import React from 'react';
import ParallaxCircle from '../Parallax/Circle';
import WorklogTab from './WorklogTab/index';
import t from '../../data/worklog';
import d from '../../data/difficulties';
import Difficulties from './WorkDifficulties/index';
import Requirements from './Requirements/index';
import './index.css';


function Worklog() {
  return (
    <div>
      <ParallaxCircle
        text="worklog"
      />
      <WorklogTab data={t.ru.data} />
      <Difficulties data={d.ru.data} />
      <Requirements />
      <div style={{ height: '400px' }} />

    </div>

  );
}

export default Worklog;

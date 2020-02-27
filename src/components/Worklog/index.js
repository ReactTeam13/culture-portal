import React from 'react';
import './index.css';

import ParallaxCircle from '../Parallax/Circle';
import WorklogTab from './WorklogTab/index';
import Difficulties from './WorkDifficulties/index';
import Requirements from './Requirements/index';
import Title from './Title/index';
import worklogData from '../../data/worklog';
import difficultiesData from '../../data/difficulties';
import localTranslation from './localTranslation';


const lang = 'ru';

function Worklog() {
  const space = (<div className="m-5 p-3" />);
  return (
    <div className="container">
      <ParallaxCircle text={localTranslation.titles[lang].WorklogTab} />
      <div className="d-none d-lg-block">{space}</div>
      <Title text={localTranslation.titles[lang].WorklogTab} />
      <WorklogTab data={worklogData[lang].data} />
      {space}
      <Title text={localTranslation.titles[lang].Difficulties} />
      <Difficulties data={difficultiesData[lang].data} />
      {space}
      <Title text={localTranslation.titles[lang].Requirements} />
      <Requirements lang={lang} />
      {space}
    </div>

  );
}

export default Worklog;

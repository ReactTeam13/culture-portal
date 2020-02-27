import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

import ParallaxCircle from '../Parallax/Circle';
import WorklogTab from './WorklogTab/index';
import Difficulties from './WorkDifficulties/index';
import Requirements from './Requirements/index';
import Title from './Title/index';
import worklogData from '../../data/worklog';
import difficultiesData from '../../data/difficulties';


function Worklog() {
  const { t, i18n: { language: lang } } = useTranslation('worklog');
  const space = (<div className="m-5 p-3" />);
  return (
    <div className="container">
      <ParallaxCircle text="worklog" />
      <div className="d-none d-lg-block">{space}</div>
      <Title text={t('tab')} />
      <WorklogTab data={worklogData[lang].data} />
      {space}
      <Title text={t('difficulties')} />
      <Difficulties data={difficultiesData[lang].data} />
      {space}
      <Title text={t('requirements')} />
      <Requirements lang={lang} />
      {space}
    </div>

  );
}

export default Worklog;

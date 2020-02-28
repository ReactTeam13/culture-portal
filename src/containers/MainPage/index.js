import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';
import { Link } from 'gatsby';
import ArchitectBlock from '../../components/ArchitectBlock';
import Button from '../../components/Button';
import architects from '../../data/architects';
import ParalaxBlock from '../../components/ParalaxBlock';

function MainPage() {
  const { t, i18n: { language } } = useTranslation('mainPage');
  const [architectDay, setArchitectDay] = useState(2);

  const getArchitectDay = (items) => {
    const { length } = items;
    const msInDay = 86400000;
    const dayNumber = Math.floor((new Date('2020-03-01').getTime()) / msInDay);
    const architectIndex = (dayNumber + length) % length;
    return architectIndex;
  };

  useEffect(() => {
    setArchitectDay(getArchitectDay(architects));
  });

  const profile = architects[architectDay][language];
  const lastNameIndex = 0;
  const urlName = architects[architectDay].en.name.split(' ')[lastNameIndex];
  const btn = (
    <Link to={`/architector/${urlName}`}>
      <Button
        type="button"
        content={t('link')}
        btnAdditionalClasses="btn-xxl btn-yellow"
      />
    </Link>
  );
  return (
    <div className="main-page">
      <ParalaxBlock text={t('title')} />
      <h2 className="text-center mb-4 pl-2 pr-2 h2 ohra">{t('todayArchitect')}</h2>
      <ArchitectBlock data={profile} btn={btn} />
    </div>
  );
}

export default MainPage;

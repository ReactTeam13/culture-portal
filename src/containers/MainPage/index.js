import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';
import { Link } from 'gatsby';
import ArchitectBlock from '../../components/ArchitectBlock';
import Button from '../../components/Button';
import architects from '../../data/architects';
import ParalaxBlock from '../../components/ParalaxBlock';

function MainPage() {
  const { t, i18n: { language } } = useTranslation('mainPage');
  const authorDay = Math.floor(Math.random() * architects.length);
  const profile = architects[authorDay][language];
  const lastNameIndex = 0;
  const urlName = architects[authorDay].en.name.split(' ')[lastNameIndex];
  const btn = (
    <Link to={`/architector/${urlName}`}>
      <Button
        type="button"
        content={t('link')}
      />
    </Link>
  );
  return (
    <div className="main-page">
      <ParalaxBlock text={t('title')} />
      <h2 className="text-uppercase text-center mb-4 title-mainpage">{t('todayArchitect')}</h2>
      <ArchitectBlock data={profile} btn={btn} />

    </div>
  );
}

export default MainPage;

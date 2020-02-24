import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import ArchitectBlock from '../../components/ArchitectBlock';
import Button from '../../components/Button';
import architects from '../../data/architects';
import ParalaxBlock from '../../components/ParalaxBlock';

function MainPage() {
  const authorDay = Math.floor(Math.random() * architects.length);
  const profile = architects[authorDay].ru;
  const lastNameIndex = 0;
  const urlName = architects[authorDay].en.name.split(' ')[lastNameIndex];
  return (
    <div className="main-page">
      <ParalaxBlock />
      <h2 className="text-uppercase text-center mb-4 title-mainpage">Архитектор дня</h2>
      <ArchitectBlock data={profile} />
      <Link to={`/architector/${urlName}`}>
        <Button
          type="button"
          content="Читать далее"
        />
      </Link>
    </div>
  );
}

export default MainPage;

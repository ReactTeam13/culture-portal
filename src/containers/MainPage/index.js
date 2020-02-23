import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import ArchitectBlock from '../../components/ArchitectBlock';
import Button from '../../components/Button';
import architects from '../../data/architects';
import ParalaxBlock from '../../components/ParalaxBlock';

function MainPage({ onButtonClick }) {
  const authorDay = Math.floor(Math.random() * architects.length);
  const profile = architects[authorDay].ru;
  const url = architects[authorDay].en.name.split(' ')[0];
  return (
    <div className="main-page">
      <ParalaxBlock />
      <h2 className="title-mainpage">Автор дня</h2>
      <Avatar data={profile} />
      <Description data={profile} />
      <h2 className="text-uppercase text-center mb-4 title-mainpage">Архитектор дня</h2>
      <ArchitectBlock data={profile} />
      <Link
        to={`/architector/${url}`}
        id={authorDay}
        onClick={onButtonClick}
      >
        <Button
          type="button"
          content="Читать далее"
        />
      </Link>
      <p className="description-mainpage">
        <span>Добро пожаловать на портал,</span>
        <span>посвященный архитекторам Беларуси.</span>
      </p>
    </div>
  );
}

export default MainPage;

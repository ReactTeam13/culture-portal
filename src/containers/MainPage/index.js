import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
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
      <Link
        to={`/architector/${url}`}
        className="read-more-button"
        id={authorDay}
        onClick={onButtonClick}
      >
        Узнать больше
      </Link>
      <p className="description-mainpage">
        <span>Добро пожаловать на портал,</span>
        <span>посвященный архитекторам Беларуси.</span>
      </p>
    </div>
  );
}

export default MainPage;

import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import Avatar from '../../components/Avatar';
import Description from '../../components/Description';
import Button from '../../components/Button';
import architects from '../../data/architects';

function MainPage({ onButtonClick }) {
  const authorDay = Math.floor(Math.random() * architects.length);
  const profile = architects[authorDay].ru;
  const url = architects[authorDay].en.name.split(' ')[0];
  return (
    <div className="main-page">
      <h2 className="title-mainpage">Автор дня</h2>
      <Avatar data={profile} />
      <Description data={profile} />
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

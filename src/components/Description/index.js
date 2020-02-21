import React from 'react';
import './index.css';

function Description({ data }) {
  const {
    name, occupation, birthDate, deathDate, birthPlace,
  } = data;
  return (
    <div className="description">
      <h1 className="name">{ name }</h1>
      <p className="occupation">{ occupation }</p>
      <p className="years">
        Годы жизни:
        <span>{ birthDate }</span>
        {' '}
        -
        <span>{ deathDate }</span>
      </p>
      <p className="birth-place">
        Место рождения:
        <span>{ birthPlace }</span>
      </p>
    </div>
  );
}

export default Description;

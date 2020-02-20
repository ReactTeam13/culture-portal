import React from 'react';
import './index.css';

function Description({ data }) {
  const {
    name, occupation, birthDate, deathDate, birthPlace,
  } = data;
  return (
    <div className="col-md-8 description">
      <h1 className="text-left name">{ name }</h1>
      <p className="text-left occupation">{ occupation }</p>
      <p className="text-left years">
        Годы жизни:
        <span>{ birthDate }</span>
        {' '}
        -
        <span>{ deathDate }</span>
      </p>
      <p className="text-left birth-place">
        Место рождения:
        <span>{ birthPlace }</span>
      </p>
    </div>
  );
}

export default Description;

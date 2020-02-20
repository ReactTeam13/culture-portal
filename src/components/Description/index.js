import React from 'react';
import './index.css';

function Description({ data }) {
  const {
    name, occupation, birthDate, deathDate, birthPlace,
  } = data;
  return (
    <div className="col-md-8 description">
      <div className="row text-left">
      <h1 className="col-md-4 offset-md-2 mb-4 name">{ name }</h1>
      <p className="col-md-8 offset-md-2 occupation">{ occupation }</p>
      <p className="col-md-6 offset-md-2 years">
        Годы жизни:
        <span>{ birthDate }</span>
        {' '}
        -
        <span>{ deathDate }</span>
      </p>
      <p className="col-md-6 offset-md-2 birth-place">
        Место рождения:
        <span>{ birthPlace }</span>
      </p>
      </div>
    </div>
  );
}

export default Description;

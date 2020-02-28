import React from 'react';
import './index.css';

function TeamBlock({ titleData }) {
  return (
    <div className="text-center team-title">
      <h2 className="h3 ohra">{titleData.article.h}</h2>
      <p className="max-w-600 p-2 mx-auto">{titleData.article.p}</p>
    </div>
  );
}

export default TeamBlock;

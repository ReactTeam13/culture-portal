import React from 'react';
import teamData from '../../data/teamData';
import TeamMember from './TeamMember/index';
import './index.css';

function TeamBlock({ lang }) {
  return (
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2">
      {teamData[lang].map((person) => (
        <div key={person.id} className="col"><TeamMember data={person} /></div>
      ))}
    </div>
  );
}

export default TeamBlock;

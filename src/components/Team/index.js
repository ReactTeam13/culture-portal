import React from 'react';
import TeamBlockPhoto from './TeamBlockPhoto/index';
import TeamTitle from './TeamTitle/index';
import TeamMembers from './TeamMembers/index';
import teamData from '../../data/teamData';
import './index.css';

function TeamBlock({ lang }) {
  return (
    <div className="container">
      <TeamBlockPhoto />
      <TeamTitle titleData={teamData[lang].title} />
      <TeamMembers teamData={teamData[lang].team} />
    </div>
  );
}

export default TeamBlock;

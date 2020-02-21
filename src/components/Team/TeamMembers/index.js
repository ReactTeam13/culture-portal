import React from 'react';
import TeamMember from '../TeamMember/index';
import './index.css';

function TeamMembers({ teamData }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
      {teamData.map((person) => (
        <div key={person.id} className="col"><TeamMember data={person} /></div>
      ))}
    </div>

  );
}

export default TeamMembers;

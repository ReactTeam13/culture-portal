import React from 'react';
import './index.css';
import { Parallax } from 'react-parallax';
import team from '../../../../static/img/assets/team.jpeg';

function TeamBlockPhoto() {
  return (
    <div>
      <Parallax bgImage={team} strength={500}>
        <div style={{ height: 300 }} />
      </Parallax>
    </div>
  );
}

export default TeamBlockPhoto;

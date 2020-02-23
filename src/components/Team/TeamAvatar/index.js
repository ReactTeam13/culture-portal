import React from 'react';
import './index.css';

function TeamAvatar({ name, src, link }) {
  return (
    <div>
      <a href={link}><img className="w-100 avatar rounded-circle" src={src} alt={name} /></a>
    </div>
  );
}

export default TeamAvatar;

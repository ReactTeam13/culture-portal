import React from 'react';
import './index.css';

function TeamAvatar({ name, src, link }) {
  let avatar = <img className="w-100 avatar rounded-circle" src={src} alt="avatar" />;
  avatar = link ? <a href={link}>{avatar}</a> : avatar;
  return (
    <div>
      {avatar}
    </div>
  );
}

export default TeamAvatar;

import React from 'react';
import './index.css';

function Avatar({ data }) {
  const { avatar, name } = data;
  return (

    <div className="author-avatar-container">
      <img src={avatar} alt={name} className="author-avatar" />
    </div>
  );
}

export default Avatar;

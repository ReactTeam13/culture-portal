import React from 'react';
import './index.css';

function Avatar({ data }) {
  const { avatar, name } = data;
  return (

    <div className="avatar-container">
      <img src={avatar} alt={name} className="avatar" />
    </div>
  );
}

export default Avatar;

import React from 'react';
import './index.css';

function Avatar({ data }) {
  const { avatar, name } = data;
  return (

    <div className="col-md-4 avatar-container">
      <img src={avatar} alt={name} class="img-thumbnail"/>
    </div>
  );
}

export default Avatar;

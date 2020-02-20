import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import Description from '../Description';

function ArchitectBlock({ data }) {
  return (

    <div className="row">
      <Avatar data={data} />
      <Description data={data} />
    </div>
  );
}

export default ArchitectBlock;

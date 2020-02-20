import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import Description from '../Description';

function ArchitectBlock({ data }) {
  return (
<div className = "container py-3">
    <div className="row">
      <Avatar data={data} />
      <Description data={data} />
    </div>
    </div>
  );
}

export default ArchitectBlock;

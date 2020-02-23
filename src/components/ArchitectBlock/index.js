import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import DescriptionShort from '../DescriptionShort';

function ArchitectBlock({ data }) {
  return (
    <div className="container py-3">
      <div className="row">
        <Avatar data={data} />
        <DescriptionShort data={data} />
      </div>
    </div>
  );
}

export default ArchitectBlock;

import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import DescriptionShort from '../DescriptionShort';

function ArchitectBlock({ data, btn }) {
  return (
    <div className="container py-3 architect">
      <div className="row">
        <Avatar data={data} />
        <DescriptionShort data={data} btn={btn} />
      </div>
    </div>
  );
}

export default ArchitectBlock;

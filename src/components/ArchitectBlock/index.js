import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import DescriptionShort from '../DescriptionShort';

function ArchitectBlock({ data, btn }) {
  return (
    <div className="container py-3 architect">
      <div className="row">
        <div className="col-md-4">
          <Avatar data={data} />
        </div>
        <div className="col-md-8">
          <DescriptionShort data={data} children={btn} />
        </div>
      </div>
    </div>
  );
}

export default ArchitectBlock;

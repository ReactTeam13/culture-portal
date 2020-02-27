import React from 'react';
import './index.css';
import Avatar from '../Avatar';
import DescriptionShort from '../DescriptionShort';

function ArchitectBlock({ data, btn }) {
  return (
    <div className="container py-3 architect">
      <div className="row">
        <div className="col-md-6 text-center text-md-left">
          <Avatar data={data} />
        </div>
        <div className="col-lg-4 col-md-6">
          <DescriptionShort data={data}>
            {btn}
          </DescriptionShort>
        </div>
      </div>
    </div>
  );
}

export default ArchitectBlock;

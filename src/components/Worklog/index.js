import React from 'react';
import ParallaxCircle from '../Parallax/Circle';
import './index.css';

function Worklog() {
  return (
    <div>
      <ParallaxCircle
        text="worklog"
      />
      <div style={{ height: '400px' }} />
    </div>

  );
}

export default Worklog;

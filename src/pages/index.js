import React from 'react';
import Button from '../components/Button';

export default () => (
  <div>
    Hello world!

    <Button
      type="button"
      content="click me"
      onClickCallback={(e) => { console.warn(e.target); }}
    />
  </div>
);

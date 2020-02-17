import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Button from '../components/Button';

export default () => (
  <div>
    <Helmet>
      <title>Culture portal. Architects of Belarus.</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    Hello world!
    <Button
      type="button"
      content="click me"
      onClickCallback={(e) => { console.warn(e.target); }}
    />
  </div>
);

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Buttons', module)
  .add('Button primary', () => (
    <Button
      btnAdditionalClasses="btn-primary"
      type="button"
      content="click me"
    />
  ))
  .add('Button primary disabled', () => (
    <Button
      btnAdditionalClasses="btn-primary"
      type="button"
      content="click me"
      isDisabled
    />
  ))
  .add('Button primary extra size', () => (
      <Button
          btnAdditionalClasses="btn-primary btn-xxl"
          type="button"
          content="click me"
      />
  ))
  .add('Button secondary', () => (
      <Button
          btnAdditionalClasses="btn-secondary"
          type="button"
          content="click me"
      />
  ))
  .add('Button secondary disabled', () => (
      <Button
          btnAdditionalClasses="btn-secondary"
          type="button"
          content="click me"
          isDisabled
      />
  ))
  .add('Button secondary extra size', () => (
    <Button
        btnAdditionalClasses="btn-secondary btn-xxl"
        type="button"
        content="click me"
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import ArchitectBlock from './index';
import Button from "../Button";
import ArchitectBlockChessOrder from "../ArchitectBlockChessOrder";
import data from '../../data/architects'

const button = <Button
    type="button"
    btnAdditionalClasses="btn-primary btn-xxl"
    content="Читать"
/>;

storiesOf('ArchitectBlock', module)
  .add('ArchitectBlock UI representation', () => (
    <ArchitectBlock
        data={data[0].ru}
        btn={button}
    />
  ))
  .add('ArchitectBlock Chess order UI representation', () => (
      <ArchitectBlockChessOrder
          data={data}
          btn={button}
      />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import Works from './index';
import data from '../../data/architects'

storiesOf('Works', module)
    .add('List of works UI representation', () => (
        <Works
            data={data[1].ru}
            title="Список работ"
            date="Года"
            work="Проекты"
        />
    ));

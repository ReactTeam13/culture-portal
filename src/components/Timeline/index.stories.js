import React from 'react';
import { storiesOf } from '@storybook/react';
import TimeLine from './index';

const index = 1;
const data = {activity: [
  {
    date: '13.01.1914',
    place: 'с.Ивановка',
    description: 'Родился в с.Ивановка Донецкой области Украины.',
  },
  {
    date: '1932-1940',
    place: 'Харьков',
    description: 'Учился в Харьковском архитектурно-строительном техникуме, а затем в Харьковском инженерно-строительном институте',
  },
  {
    date: '1940-1944',
    place: 'Польша',
    description: 'Был призван в армию, сражался с фашистами, два года провёл в плену, бежал из плена, примкнул к партизанам.',
  },
  {
    date: '1944-1980',
    place: 'Минск',
    description: 'На протяжении 36 лет работал в Белгоспроекте. Прошёл путь от рядового архитектора до руководителя архитектурно-конструкторской мастерской.',
  },
]}

storiesOf('Timeline', module)
  .add('Timeline', () => (
      <TimeLine
        data={data}
      />
  ));

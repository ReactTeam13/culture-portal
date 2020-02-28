import React from 'react';
import './index.css';
import Plx from 'react-plx';

const prxData1 = [
  {
    start: 0,
    duration: 220,
    properties: [
      {
        startValue: 1,
        endValue: -1100,
        property: 'translateX',
      },
    ],
  },
];

const prxData2 = [
  {
    start: 20,
    duration: 220,
    properties: [
      {
        startValue: 1,
        endValue: -1200,
        property: 'translateX',
      },
    ],
  },
];

const prxData3 = [
  {
    start: 20,
    duration: 40,
    properties: [
      {
        startValue: 1,
        endValue: 25,
        property: 'rotate',
      },
    ],
  },
];


function TitleSwipe({ text1, text2 }) {
  return (
    <div className="text-center d-none d-md-block d-lg-block m-0 mt-5 pt-5 mb-5 row w-100">
      <div className="text-center pt-5 col">
        <Plx parallaxData={prxData3}>
          <div className="long_splitter mx-auto" />
        </Plx>
        <Plx parallaxData={prxData1}>
          <h2 className="text-upper h2 space-1 p-2 ohra">{text1}</h2>
        </Plx>
        <Plx parallaxData={prxData2}>
          <h3 className="text-upper h2  space-2 ohra">{text2}</h3>
        </Plx>
        <div className="long_splitter mx-auto m-4" />
      </div>
    </div>
  );
}

export default TitleSwipe;

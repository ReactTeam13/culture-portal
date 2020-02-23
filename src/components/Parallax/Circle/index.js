import React from 'react';
import './index.css';
import Plx from 'react-plx';
import circle1 from '../../../../static/img/assets/circle1.png';

const plxData1 = [
  {
    start: 0,
    duration: 280,
    properties: [
      {
        startValue: 0,
        endValue: 70,
        property: 'translateY',
      },
    ],
  },
  {
    start: 280,
    duration: 50,
    properties: [
      {
        startValue: 0,
        endValue: -90,
        property: 'rotate',
      },
    ],
  },
];

const plxData2 = [
  {
    start: 0,
    duration: 200,
    properties: [
      {
        startValue: 0,
        endValue: 360,
        property: 'rotate',

      },
      {
        startValue: 1,
        endValue: 1.4,
        property: 'scale',

      },

    ],
  },
];

const circte1Style = {
  width: 180,
  height: 180,
  left: '50%',
  marginLeft: -90,
  top: 270,
  position: 'absolute',
};

const circte2Style = {
  width: 250,
  height: 250,
  left: '50%',
  marginLeft: -126,
  top: 231,
  position: 'absolute',

};

function ParallaxCircle({ text }) {
  return (
    <div style={{ height: 500 }} className="text-center d-none d-md-block d-lg-block">
      <Plx parallaxData={plxData1} style={circte1Style}>
        <img src={circle1} alt="circle" className="w-100" />
      </Plx>
      <Plx parallaxData={plxData2} style={circte2Style}>
        <div className="rounded-circle w-100 circle2-1" />
        <div className="rounded-circle circle2-2" />
        <p className="m-3">{text}</p>
      </Plx>
      <div className="rounded-circle circle3" />
    </div>
  );
}

export default ParallaxCircle;

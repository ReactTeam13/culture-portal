import React from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x) => `translate3d(${x / 25 + 10}px,0,0)`;
const trans2 = (x) => `translate3d(${x / 10 - 10}px,0,0)`;

function ParalaxBlock({ text }) {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5 } }));
  const { xy } = props;
  return (

    <div className="paralax-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: xy.interpolate(trans2) }} />
      <animated.div className="card3">{text}</animated.div>
      <animated.div className="card4" />
      <animated.div className="card5" />
    </div>

  );
}

export default ParalaxBlock;

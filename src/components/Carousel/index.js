import React from 'react';

import './index.css';

function Carousel({ list, description }) {
  let activeItem = 0;

  const slide = (side) => {
    if (side === 'prev') {
      activeItem -= 1;
    } else {
      activeItem += 1;
    }
    if (activeItem > list.length - 1 || activeItem < 0) {
      activeItem = 0;
    }
    document.querySelector('[data-carusel]').querySelector('.active').classList.remove('active');
    document.querySelector(`[data-slide-id="${activeItem}"]`).classList.add('active');
    document.querySelector('[data-slide-description]').textContent = description[activeItem];
  };

  return (
    <div>
      <div data-carusel="" className="carousel slide">
        <div className="carousel-inner">
          {list.map((item, i) => {
            let classStr = 'carousel-item';
            if (activeItem === i) {
              classStr += ' active';
            }
            return (
              <div key={i} className={classStr} data-slide-id={i}>
                <img src={item} className="d-block w-100" alt="building" />
              </div>
            );
          })}

        </div>
        <span tabIndex={0} onKeyDown={() => {}} className="carousel-control-prev" onClick={() => { slide('prev'); }} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </span>
        <span tabIndex={-1} onKeyDown={() => {}} className="carousel-control-next" onClick={() => { slide('next'); }} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </span>
      </div>
      <div data-slide-description="" className="pt-3">
        { description ? description[activeItem] : null}
      </div>
    </div>
  );
}

export default Carousel;

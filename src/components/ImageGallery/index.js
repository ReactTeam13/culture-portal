import React from 'react';
import Carusel from '../Carusel/index';
import './index.css';

function ImageGallery({ data, title }) {
  const images = [];
  const description = [];
  data.works.forEach((item) => {
    images.push(item.image);
    description.push(item.description);
  });

  return (
    <div className="photogallery pt-5 pb-5 container ">
      <h2 className="h3 mb-5 ohra">{title}</h2>
      <div className="row text-center">
        <div className="col-lg-10 col-md-10 col-sm-11 col-11 mx-auto">
          <Carusel list={images} description={description} />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;

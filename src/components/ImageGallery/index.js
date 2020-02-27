import React from 'react';
import ImageGallery from 'react-image-gallery';
import './index.css';

function ImageGalleryComponent({ data, title }) {
  const images = [];
  data.works.forEach((item) => {
    const obj = {
      original: item.image,
      thumbnail: item.image,
      description: item.description,
    };
    images.push(obj);
  });

  return (
    <div className="photogallery pt-5 pb-5 container">
      <h2 className="h3 mb-5 ohra">{title}</h2>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageGalleryComponent;

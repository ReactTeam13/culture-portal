import React from 'react';
import ImageGallery from 'react-image-gallery';
import './index.css';

function ImageGalleryComponent({ data }) {
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
    <div className="photogallery">
      <h2 className="h3 mb-3 ohra">Фотогалерея</h2>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageGalleryComponent;

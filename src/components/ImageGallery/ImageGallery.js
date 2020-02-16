import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css';

function ImageGalleryComponent(props) {
  const images = [
    {
      original: props.data.works[0].image,
      thumbnail: props.data.works[0].image,
    },
    {
      original: props.data.works[1].image,
      thumbnail: props.data.works[1].image,
    },
    {
      original: props.data.works[2].image,
      thumbnail: props.data.works[2].image,
    },
    {
      original: props.data.works[3].image,
      thumbnail: props.data.works[3].image,
    },
    {
      original: props.data.works[4].image,
      thumbnail: props.data.works[4].image,
    },
    {
      original: props.data.works[5].image,
      thumbnail: props.data.works[5].image,
    }
  ]

  return (
    <div>
      <h2 style={{textAlign: 'center', color: '#e86971', fontSize: '2em' }}>Фотогалерея</h2>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageGalleryComponent
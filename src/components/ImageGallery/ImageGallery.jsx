import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={() => openModal(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

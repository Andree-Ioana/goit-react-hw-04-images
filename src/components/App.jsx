import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';


const API_KEY = '42271734-ccd5724e9f8ad9dee5c32e4fe';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=2&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(prevImages => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error('Error fetching more images:', error);
    }
    setLoading(false);
  };

  const openModal = imageUrl => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage('');
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} setQuery={setQuery} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={loadMoreImages} />}
      {modalImage && <Modal imageUrl={modalImage} closeModal={closeModal} />}
    </div>
  );
};

export default App;

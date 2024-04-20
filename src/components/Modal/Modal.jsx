
import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClickOutside}>
    <div className={styles.modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;

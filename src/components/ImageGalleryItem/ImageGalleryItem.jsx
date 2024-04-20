
import React from "react";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({imageUrl, onClick, tags }) => {
    
    return (
        <li className={styles.imageGalleryItem }>
            <img src={imageUrl} onClick={onClick} alt={ tags} />
        </li>
    )
}

export default ImageGalleryItem;

import React from "react";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({imageUrl, onClick }) => {
    
    return (
        <li className={styles.imageGalleryItem }>
            <img src={imageUrl} alt="Photo" onClick={onClick}/>
        </li>
    )
}

export default ImageGalleryItem;
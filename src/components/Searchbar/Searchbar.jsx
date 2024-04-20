import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit, setQuery }) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(inputValue);
    onSubmit(event);
  }

   return (
    <header className={styles.searchbarContainer}>
      <form className={styles.formSearch} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button} >
          <span >Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
  
};

export default Searchbar;

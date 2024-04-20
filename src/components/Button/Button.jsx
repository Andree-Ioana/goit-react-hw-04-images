import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Load more</button>;
};

export default Button;

import React from 'react';
import './Snackbar.css';

const Snackbar = ({ message, isVisible }) => {
  return (
    <div className={`snackbar ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Snackbar;
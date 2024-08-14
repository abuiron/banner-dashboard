import React from 'react';
import Countdown from './Countdown';
import './Banner.css'; // Importing the CSS for Banner

function Banner({ description, link, countdownTime }) {
  return (
    <div className="banner">
      <h1>{description}</h1>
      <Countdown countdownTime={countdownTime} />
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Link</a>
    </div>
  );
}

export default Banner;

import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Importing the CSS for Countdown

function Countdown({ countdownTime }) {
  const [timeLeft, setTimeLeft] = useState(countdownTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="countdown">
      Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
    </div>
  );
}

export default Countdown;

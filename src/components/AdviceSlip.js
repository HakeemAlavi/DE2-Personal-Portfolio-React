import React, { useState, useEffect } from 'react';

function AdviceSlip() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    // Fetch advice from the Advice Slip API
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  }, []);

  return (
    <div className="AdviceSlip">
      <h2>Random Advice</h2>
      <p>{advice}</p>
    </div>
  );
}

export default AdviceSlip;

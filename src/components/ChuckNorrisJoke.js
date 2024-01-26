import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
      }
    };

    fetchJoke();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      {joke ? <p>{joke}</p> : <p>Loading joke...</p>}
    </div>
  );
};

export default ChuckNorrisJoke;

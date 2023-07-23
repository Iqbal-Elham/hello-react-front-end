import React, { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = async () => {
    try {
      const response = await fetch('http://localhost:3000/random_greeting');
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
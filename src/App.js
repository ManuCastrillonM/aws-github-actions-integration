import { useState, useEffect } from 'react';
import './App.css';
import jokes from './assets/jokes.json';

function App() {
  const [joke, setJoke] = useState('');

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.jokes.length);
    return jokes.jokes[randomIndex];
  };

  useEffect(() => {
    setJoke(getRandomJoke());
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>BAD JOKES GENERATOR</h1>
        <div className="joke-card">
          {joke.split('?').length > 1 ? (
            <>
              <p className="question">{joke.split('?')[0]}?</p>
              <p className="answer">{joke.split('?')[1]}</p>
            </>
          ) : (
            <p className="single-line">{joke}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

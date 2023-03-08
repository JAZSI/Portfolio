import './index.scss';

import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

function Games() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container games-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'a', 'm', 'e', 's']}
              idx={15}
            />
          </h1>
          <p>The games that I play, if you're interested to play with me</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Games;

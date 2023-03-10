import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Typewriter from 'typewriter-effect';
import Loader from 'react-loaders';

import LogoTitle from '../../assets/images/J.png';
import BackgroundImage from '../../assets/images/background.png';

import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 's', 'z', 'i'];
  const jobArray = ['H', 'o', 'b', 'b', 'y', 'i', 's', 't'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>
            I am a&nbsp;
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Self-taught Developer',
                  'Hobbyist Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                cursor: '_',
                deleteSpeed: 90,
              }}
            />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="background">
        <img src={BackgroundImage} alt="Background" className="image" />
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
};

export default Home;

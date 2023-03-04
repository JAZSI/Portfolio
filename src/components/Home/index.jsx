import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Typewriter from 'typewriter-effect';
import Loader from 'react-loaders';

import LogoTitle from '../../assets/images/J.png';

import AnimatedLetters from '../AnimatedLetters';
import Background from '../Background';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 's', 'z', 'i'];
  const jobArray = [
    'H',
    'o',
    'b',
    'b',
    'y',
    'i',
    's',
    't',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

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
                  'Discord Bot Developer',
                  'Self-taught Developer',
                  'Hobbyist Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                cursor: '_',
                deleteSpeed: 50,
              }}
            />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Background />
      <Loader type="pacman" />
    </>
  );
};

export default Home;

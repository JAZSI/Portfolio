import './index.scss';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a junior high school student, I became interested in coding and
            started learning it on my own.
          </p>
          <p>
            Since then, I have become a self-taught and amateur developer,
            exploring the world of coding and building my skills as a frontend
            developer.
          </p>
          <p>
            Additionally, I have been working on developing discord bots, taking
            my coding skills to the next level.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;

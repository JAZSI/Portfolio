import './index.scss';

import {
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faReact,
  faVuejs,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

function About() {
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
            Hi! I'm a junior high school student who is learning how to code. I
            find coding to be an exciting and challenging field, and I'm eager
            to explore all that it has to offer. With so many different
            programming languages and technologies to choose from, there's
            always something new to learn.
          </p>
          <p>
            Currently, I'm focused on developing my skills in two areas:
            building discord bots and creating frontend websites. Both of these
            areas have been incredibly rewarding to work on, and I've already
            made a lot of progress. With each project that I complete, I'm able
            to hone my skills and take on even more challenging projects.
          </p>
          <p>
            Overall, I'm really enjoying my journey into the world of coding.
            I'm excited to see where it takes me in the future, and I'm looking
            forward to all the opportunities that await me as I continue to
            learn and grow in this field.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faVuejs} color="#42B883" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#CD6799" />
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
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
};

export default About;

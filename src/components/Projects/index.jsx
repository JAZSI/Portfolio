import './index.scss';

import { useEffect, useState } from 'react';

import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';
import ProjectsData from '../ProjectsData';

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClickGithub = () => {
    window.open('https://github.com/JAZSI', '_blank');
  };

  const handleClickHuggingface = () => {
    window.open('https://huggingface.co/Jaszii', '_blank');
  };

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="profile-buttons">
            <button onClick={handleClickGithub}>GitHub Profile</button>
            <br />
            <button onClick={handleClickHuggingface}>
              Hugging Face Profile
            </button>
          </div>
        </div>

        <div className="project-cards">
          <ProjectsData username="JAZSI" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Projects;

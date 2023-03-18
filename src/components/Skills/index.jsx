import './index.scss';

import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import TextSphere from '../TextSphere';

function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const texts = [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'Electron',
    'React',
    'NextJS',
    'Vue',
    'Vite',
    'NodeJS',
    'Jquery',
    'ES6',
    'GIT',
    'GITHUB',
    'MongoDB',
    'Python',
    'Jupyter',
  ];
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            As a self-taught web developer, I have honed my skills through
            online resources and practical experience. I have strong proficiency
            in programming languages such as HTML, CSS, and JavaScript. I am
            experienced in using web development frameworks such as React and
            Angular to build dynamic and responsive web applications. I also
            have expertise in server-side technologies such as Node.js, which
            allows me to create complex and scalable web applications.
          </p>
        </div>
        <div className="skills-wrap">
          <TextSphere texts={texts} />
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
}

export default Skills;

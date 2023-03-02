import './index.scss';
import { useEffect, useState } from 'react';

import {
  faDiscord,
  faGithub,
  faTwitch,
  faYoutube,
  faTwitter,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from 'react-loaders';

import icon from '../../assets/images/icon.png';

import GithubCard from '../GithubCard';
import ProfileCard from '../PorfileCard';
import AnimatedLetters from '../AnimatedLetters';

function Portfolio() {
  const username = 'JAZSI';
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
      <div className="container portfolio-page">
        <div className="profileCard">
          <ProfileCard icon={icon} />
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'O', 'C', 'I', 'A', 'L', 'S']}
                idx={15}
              />
            </h1>
          </div>

          <div className="social-buttons">
            <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
              <button className="social-btn">
                <FontAwesomeIcon icon={faGithub} color="#000000" />
                GitHub
              </button>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
              <button className="social-btn">
                <FontAwesomeIcon icon={faDiscord} color="#7289da" />
                Discord
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/jaszi_ow"
            >
              <button className="social-btn">
                <FontAwesomeIcon icon={faTwitch} color="#9146FF" />
                Twitch
              </button>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
              <button className="social-btn">
                <FontAwesomeIcon icon={faReddit} color="#FF4500" />
                Reddit
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCqKWA0x62qEaPlWOM0ZRv7A"
            >
              <button className="social-btn">
                <FontAwesomeIcon icon={faYoutube} color="#FF0000" />
                YouTube
              </button>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
              <button className="social-btn">
                <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
                Twitter
              </button>
            </a>
          </div>
        </div>
        <div className="githubCard">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'J',
                  'a',
                  's',
                  'z',
                  'i',
                  "'s",
                  ' ',
                  'P',
                  'r',
                  'o',
                  'j',
                  'e',
                  'c',
                  't',
                  's',
                ]}
                idx={15}
              />
            </h1>
          </div>
          <GithubCard username={username} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;

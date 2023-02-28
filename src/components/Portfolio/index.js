import './index.scss';

import Loader from 'react-loaders';

import icon from '../../assets/images/icon.png';

import GithubCard from '../GithubCard';
import ProfileCard from '../PorfileCard';

function Portfolio() {
  const username = 'JAZSI';
  return (
    <>
      <div className="container portfolio-page">
        <div className="profileCard">
          <ProfileCard icon={icon} />
        </div>
        <div className="githubCard">
          <GithubCard username={username} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;

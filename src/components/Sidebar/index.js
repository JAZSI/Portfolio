import './index.scss';

import {
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

import LogoSubtitle from '../../assets/images/Jaszi.png';
import Logo from '../../assets/images/Logo.png';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jaszi" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4D4D4E" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4D4D4E" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4D4D4E" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
            <FontAwesomeIcon icon={faGithub} color="#4D4D4E" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCqKWA0x62qEaPlWOM0ZRv7A">
            <FontAwesomeIcon icon={faYoutube} color="#4D4D4E" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/jaszi_ow">
            <FontAwesomeIcon icon={faTwitch} color="#4D4D4E" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

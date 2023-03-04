import './index.scss';

import {
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFolder,
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

import LogoSubtitle from '../../assets/images/Jaszi.png';
import Logo from '../../assets/images/J.png';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jaszi" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        {/* Home button */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#E6E6FA" />
        </NavLink>
        {/* About button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#E6E6FA" />
        </NavLink>
        {/* Contact button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#E6E6FA" />
        </NavLink>
        {/* Portfolio button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faFolder} color="#E6E6FA" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#E6E6FA"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/JAZSI">
            <FontAwesomeIcon icon={faGithub} color="#E6E6FA" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCqKWA0x62qEaPlWOM0ZRv7A"
          >
            <FontAwesomeIcon icon={faYoutube} color="#E6E6FA" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/jaszi_ow"
          >
            <FontAwesomeIcon icon={faTwitch} color="#E6E6FA" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#E6E6FA"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;

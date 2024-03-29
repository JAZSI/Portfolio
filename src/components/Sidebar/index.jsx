import "./index.scss";

import {
  faFolder,
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import LogoSubtitle from "../../assets/images/Jaszi.png";
import Logo from "../../assets/images/J.png";
import { useState } from "react";

function Sidebar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jaszi" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        {/* Home button */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#fff9a6" />
        </NavLink>
        {/* About button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#fff9a6" />
        </NavLink>
        {/* Projects button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faFolder} color="#fff9a6" />
        </NavLink>
        {/* Contact button */}
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff9a6" />
        </NavLink>
        {/* Close Icon */}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#fff9a6"
          size="3x"
          className="close-icon"
        />
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#fff9a6"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
}

export default Sidebar;

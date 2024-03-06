import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTiktok,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Sidebar from "../Sidebar";

function Layout() {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title = isPageVisible ? "Jaszi" : "Come back (╥﹏╥)";
  }, [isPageVisible]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <div className="App">
        <Sidebar />
        <div className="page">
          <Outlet />
          <div className="socials">
            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://github.com/JAZSI"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://www.tiktok.com/@jasziowo"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://www.twitch.tv/jaszi_ow"
              >
                <FontAwesomeIcon
                  icon={faTwitch}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <span className="line" />
          </div>
        </div>
        <Particles
          url="/particles.json"
          className="particles"
          particlesLoaded={particlesLoaded}
        />
      </div>
    );
  } else
    return (
      <div className="App">
        <Sidebar />
        <div className="page">
          <Outlet />
          <div className="socials">
            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://github.com/JAZSI"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://www.tiktok.com/@jasziowo"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <div>
              <Link
                style={{ color: "inherit" }}
                target="_blank"
                href="https://www.twitch.tv/jaszi_ow"
              >
                <FontAwesomeIcon
                  icon={faTwitch}
                  style={{ height: 25, width: 25 }}
                  color="currentColor"
                />
              </Link>
            </div>

            <span className="line" />
          </div>
        </div>
      </div>
    );
}

export default Layout;

import "./index.scss";

import { useEffect, useState } from "react";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faMarkdown,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import Card from "./Card";

import J from "../../assets/images/Jaszi.png";

function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch("https://api.github.com/users/JAZSI/repos");
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();

    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Welcome to the projects section of my portfolio! As a self-taught
            developer, I have worked on a variety of projects that showcase my
            passion for learning and problem-solving. In this section, you will
            find a collection of my most recent and exciting projects that
            highlight my skills and abilities in various domains.
          </p>

          <div class="icon-container">
            <FontAwesomeIcon icon={faHtml5} color="#E34F26" />
            <FontAwesomeIcon icon={faCss3Alt} color="#1572B6" />
            <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />
            <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            <FontAwesomeIcon icon={faVuejs} color="#4FC08D" />
            <FontAwesomeIcon icon={faSass} color="#CC6699" />
            <FontAwesomeIcon icon={faNodeJs} color="#339933" />
            <FontAwesomeIcon icon={faPython} color="#3776AB" />
            <FontAwesomeIcon icon={faGitAlt} color="#F05032" />
            <FontAwesomeIcon icon={faGithub} color="#181717" />
            <FontAwesomeIcon icon={faNpm} color="#CB3837" />
            <FontAwesomeIcon icon={faMarkdown} color="#000000" />
          </div>
        </div>

        <div className="project-cards">
          <div className="card-wrapper">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                title={repo.name}
                description={repo.description}
                link={repo.html_url}
                image={J}
                forks={repo.forks_count}
                stars={repo.stargazers_count}
                language={repo.language}
              />
            ))}
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
}

export default Projects;

import React, { useState, useEffect } from 'react';
import './index.scss';

const GithubCard = ({ username }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, [username]);

  const renderProjectCards = () => {
    const rows = [];
    const numCols = 3;
    const numRows = Math.ceil(projects.length / numCols);

    const handleCardClick = (projectUrl) => {
      window.open(projectUrl, '_blank');
    };

    for (let i = 0; i < numRows; i++) {
      const rowItems = [];
      for (let j = 0; j < numCols; j++) {
        const index = i * numCols + j;
        if (index >= projects.length) {
          break;
        }
        const project = projects[index];
        rowItems.push(
          <div
            className="card"
            key={project.id}
            onClick={() => handleCardClick(project.html_url)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="card-footer">
              <span>{project.language}</span>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        );
      }
      rows.push(
        <div className="card-row" key={i}>
          {rowItems}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="github">
      <div className="card-container">{renderProjectCards()}</div>
    </div>
  );
};

export default GithubCard;

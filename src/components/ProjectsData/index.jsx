import './index.scss';
import { useEffect, useState } from 'react';
import Card from '../Card';

function ProjectsData({ username }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div className="card-wrapper">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.name}
          description={project.description}
          footer={`Language: ${project.language}`}
          url={project.html_url}
        />
      ))}
    </div>
  );
};

export default ProjectsData;

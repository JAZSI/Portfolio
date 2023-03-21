import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ title, image, link, description, stars, forks, language }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="card">
      <div className="image" style={cardStyle}></div>
      <div className="content">
        <span className="title">{title}</span>
        <p className="desc">{description}</p>
        <a
          href={link}
          className="action"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out more
          <span aria-hidden="true"> →</span>
        </a>
      </div>
      <div className="details">
        <div className="stars-forks">
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          {stars}
          <FontAwesomeIcon icon={faCodeFork} className="fork-icon" />
          {forks}
        </div>
        <span className="language">{language}</span>
      </div>
    </div>
  );
}

export default Card;

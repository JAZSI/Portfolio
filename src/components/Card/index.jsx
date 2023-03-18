import "./index.scss";

function Card({ title, image, link, description }) {
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
    </div>
  );
}

export default Card;

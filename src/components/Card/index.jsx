import './index.scss';

function Card({ title, description, footer, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="card-footer">{footer}</p>
    </div>
  );
};

export default Card;

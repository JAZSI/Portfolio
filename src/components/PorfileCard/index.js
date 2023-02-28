import { Link } from 'react-router-dom';
import './index.scss';

function ProfileCard({ icon }) {
  return (
    <div className="card">
      <div className="image">
        <img src={icon} alt="Profile Picture" />
      </div>
      <div className="name">Projects by Jaszi</div>
      <div className="content">
        <p>Self-taught | Amateur developer Learning how to code UwU</p>
        <div className="buttons">
          <Link to="https://github.com/JAZSI">Github</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

import './index.scss';

import { Link } from 'react-router-dom';

function ProfileCard({ icon }) {
  return (
    <div className="card">
      <div className="image">
        <img src={icon} alt="Profile Picture" />
      </div>
      <div className="name">Jaszi</div>
      <div className="content">
        <p>Self-taught | Amateur developer Learning how to code UwU</p>
        <div className="buttons">
          <Link to="/contact">CONTACT ME</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

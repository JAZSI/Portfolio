import './index.scss';

import bg from '../../assets/images/background.png';

const Background = () => {
  return (
    <div className="background">
      <img src={bg} alt="Background" className="image" />
    </div>
  );
};

export default Background;

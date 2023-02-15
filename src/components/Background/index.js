import './index.scss';
import Image from '../../assets/images/Background.png';

const Background = () => {
    return (
      <div className="background">
        <img src={Image} alt="Background" className="image" />
      </div>
    )
}

export default Background;
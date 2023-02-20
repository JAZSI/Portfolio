import './index.scss';

import { useState, useEffect } from 'react';

import bg1 from '../../assets/images/backgrounds/Ayaka.png';
import bg2 from '../../assets/images/backgrounds/Keqing.png';
import bg3 from '../../assets/images/backgrounds/Kokomi.png';
import bg4 from '../../assets/images/backgrounds/Mona.png';
import bg5 from '../../assets/images/backgrounds/Lisa.png';
import bg6 from '../../assets/images/backgrounds/Shogun.png';
import bg7 from '../../assets/images/backgrounds/Sara.png';

const Background = () => {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];
  const [randomImage, setRandomImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomImage = images[Math.floor(Math.random() * images.length)];
      setRandomImage(newRandomImage);
    }, 180000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="background">
      <img src={randomImage} alt="Background" className="image" />
    </div>
  );
};

export default Background;

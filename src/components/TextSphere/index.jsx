import './index.scss';

import { useEffect } from 'react';
import TagCloud from 'TagCloud';

function TextSphere({ texts }) {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';

      const options = {
        radius: 400,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
}

export default TextSphere;

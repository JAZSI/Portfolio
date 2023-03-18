import './index.scss';

import { loadFull } from 'tsparticles';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Particles from 'react-particles';

import Sidebar from '../Sidebar';

function Layout() {
  const [isPageVisible, setIsPageVisible] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title = isPageVisible ? 'Jaszi' : 'Come back (╥﹏╥)';
  }, [isPageVisible]);

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <Particles url="/particles.json" init={particlesInit} />
    </div>
  );
};

export default Layout;

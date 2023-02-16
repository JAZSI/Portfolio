import './index.scss';

import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import Particles from 'react-particles';

import Sidebar from '../Sidebar';

const Layout = () => {
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#9F2B68', '#BF40BF', '#AA336A', '#CBC3E3', '#CF9FFF'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
      <Particles options={options} init={particlesInit} />
    </div>
  );
};

export default Layout;

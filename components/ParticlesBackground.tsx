// components/ParticlesBackground.tsx

import React from 'react';
import { Particles } from 'react-tsparticles';

const ParticlesBackground: React.FC = () => {
  const particleOptions = {
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
      links: {
        enable: true,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={particleOptions}
      style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ParticlesBackground;

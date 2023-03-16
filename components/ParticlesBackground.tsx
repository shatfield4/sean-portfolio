// components/ParticlesBackground.tsx
import { Particles } from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <div className="particles-container absolute inset-0 z-0">
      <Particles
        options={{
          particles: {
            number: {
              value: 500,
            },
            size: {
              value: 3,
            },
            links: {
              enable: true,
              opacity: 0.5,
            },
          },
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

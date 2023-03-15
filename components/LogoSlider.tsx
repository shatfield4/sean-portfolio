import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Ethereum', logo: '/images/technologies/ethereum-logo.svg' },
  { name: 'Next.js', logo: '/images/technologies/nextjs-logo.png' },
  { name: 'React', logo: '/images/technologies/react-logo.svg' },
  { name: 'Vue.js', logo: '/images/technologies/vuejs-logo.svg' },
  { name: 'AWS', logo: '/images/technologies/aws-logo.png' },
  { name: 'Digital Ocean', logo: '/images/technologies/digitalocean-logo.png' },
  { name: 'Cloudflare', logo: '/images/technologies/cloudflare-logo.svg' },
  { name: 'Node.js', logo: '/images/technologies/nodejs-logo.svg' },
  { name: 'GoLang', logo: '/images/technologies/golang-logo.svg' },
  // Add more technologies here
];
const TechnologiesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [marqueeDuration, setMarqueeDuration] = useState<number>(0);

  useEffect(() => {
    const carouselWidth = (carouselRef.current as HTMLDivElement)?.offsetWidth ?? 0;
    const totalWidth = (100 + 25) * technologies.length; // 16px = space-x-8 between images

    const duration = totalWidth / carouselWidth * 10; // 10s per carousel width
    setMarqueeDuration(duration );
  }, [carouselRef]);

  return (
    <div className="w-full py-8 bg-gray-900">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex space-x-8 whitespace-nowrap marquee" style={{ animationDuration: `${marqueeDuration}s` }}>
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 px-1">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="mx-auto filter transition-all duration-300 hover:brightness-125 tech-image"
                width={100}
                height={50}
              />
            </div>
          ))}
          <div className="spacer" style={{ width: '0rem' }}></div>
          {technologies.map((tech, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 px-1">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="mx-auto filter transition-all duration-300 hover:brightness-125 tech-image"
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform:translateX(-100%);
          }
        }
        /* Add additional styles to adjust the speed and timing of the animation */
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};


export default TechnologiesCarousel;
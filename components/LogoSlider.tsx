import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const technologies = [
  { name: 'Vue.js', logo: '/images/technologies/vuejs-logo.svg' },
  { name: 'MongoDB', logo: '/images/technologies/mongodb-logo.svg' },
  { name: 'React', logo: '/images/technologies/react-logo.svg' },
  { name: 'Next.js', logo: '/images/technologies/nextjs-logo.png' },
  { name: 'AWS', logo: '/images/technologies/aws-logo.png' },
  { name: 'Digital Ocean', logo: '/images/technologies/digitalocean-logo.png' },
  { name: 'GoLang', logo: '/images/technologies/golang-logo.svg' },
  { name: 'Node.js', logo: '/images/technologies/nodejs-logo.svg' },
  { name: 'Cloudflare', logo: '/images/technologies/cloudflare-logo.svg' },
  { name: 'Ethereum', logo: '/images/technologies/ethereum-logo.svg' },
  { name: 'Github', logo: '/images/technologies/github-logo.png' },
  { name: 'Python', logo: '/images/technologies/python-logo.svg' },
  { name: 'Solidity', logo: '/images/technologies/solidity-logo.png' },
  // Add more technologies here
];

const TechnologiesCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">My Tech Stack</h2>
        <Marquee speed={50} gradient={false}>
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 px-1">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="mx-10 filter transition-all duration-300 hover:brightness-125 tech-image"
                width={120}
                height={50}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;

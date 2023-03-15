// // components/TechnologiesSection.tsx

// import Image from 'next/image';
// import React from 'react';

// const TechnologiesSection: React.FC = () => {
//   const technologies = [
//     { name: 'Ethereum', logo: '/technologies/ethereum.svg' },
//     { name: 'Next.js', logo: '/technologies/nextjs.svg' },
//     { name: 'React.js', logo: '/technologies/reactjs.svg' },
//     { name: 'Vue.js', logo: '/technologies/vuejs.svg' },
//     { name: 'AWS', logo: '/technologies/aws.svg' },
//     { name: 'Digital Ocean', logo: '/technologies/digitalocean.svg' },
//     { name: 'Cloudflare', logo: '/technologies/cloudflare.svg' },
//   ];

//   return (
//     <div className="bg-gray-900 py-16">
//       <h2 className="text-4xl font-bold text-center text-white mb-10">
//         Technologies
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {technologies.map((tech) => (
//           <div key={tech.name} className="flex flex-col items-center">
//             <Image
//               src={tech.logo}
//               alt={tech.name}
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//             <span className="text-white mt-2">{tech.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechnologiesSection;

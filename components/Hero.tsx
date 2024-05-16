import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "./Button";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // when the button is clicked, scroll to the seangpt section
  const handleClick = () => {
    const seangpt = document.getElementById("seangpt") as HTMLElement | null;
    if (seangpt) {
      seangpt.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto py-20 px-6 border border-gray-500 rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Image with soft border and shadow */}
          <div className="flex justify-center px-8">
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Sean Hatfield"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="flex-grow max-w-lg lg:max-w-xl lg:w-1/2">
            <h1 className="text-5xl text-white font-bold leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="text-yellow-300">Sean Hatfield</span>.
            </h1>
            <h2 className="text-3xl text-white font-semibold mb-8 leading-tight">
              - {text}
              <Cursor cursorColor="#FDE68A" />
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Building innovative solutions for the future of tech that drive
              growth and revolutionize industries.
            </p>
            <Button onClick={handleClick} buttonText="Chat with AI me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import Image from 'next/image';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import Button from './Button';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const svg1 = "data:image/svg+xml;base64," + btoa('<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_103_17)"> <path d="M97.8118 1.84638C98.2359 -0.615472 101.764 -0.615455 102.188 1.8464L106.863 28.9805C107.236 31.1438 110.179 31.5163 111.077 29.5138L122.339 4.39701C123.361 2.11817 126.778 2.99725 126.578 5.48745L124.371 32.9338C124.195 35.1221 126.953 36.2162 128.32 34.5003L145.463 12.9789C147.018 11.0263 150.11 12.7293 149.298 15.0913L140.348 41.1255C139.634 43.2011 142.034 44.9481 143.784 43.6267L165.73 27.053C167.721 25.5493 170.293 27.9691 168.92 30.0546L153.789 53.0407C152.583 54.8733 154.474 57.1634 156.497 56.3195L181.867 45.7349C184.169 44.7746 186.06 47.7592 184.212 49.4371L163.851 67.9308C162.228 69.4053 163.491 72.0946 165.66 71.7812L192.86 67.8507C195.328 67.4941 196.419 70.8561 194.213 72.021L169.901 84.8603C167.963 85.8839 168.519 88.8034 170.697 89.0403L198.019 92.0109C200.498 92.2805 200.719 95.8084 198.294 96.3871L171.559 102.765C169.427 103.274 169.241 106.24 171.292 107.012L197.018 116.697C199.352 117.576 198.691 121.048 196.198 121.005L168.72 120.521C166.529 120.482 165.613 123.309 167.408 124.568L189.922 140.359C191.964 141.792 190.462 144.99 188.058 144.326L161.564 137.011C159.451 136.428 157.862 138.937 159.288 140.604L177.175 161.509C178.798 163.406 176.549 166.129 174.385 164.887L150.539 151.2C148.637 150.109 146.475 152.144 147.443 154.113L159.579 178.818C160.68 181.06 157.826 183.137 156.039 181.396L136.338 162.197C134.768 160.666 132.168 162.098 132.617 164.247L138.24 191.199C138.75 193.645 135.469 194.946 134.171 192.814L119.855 169.309C118.713 167.435 115.84 168.174 115.741 170.367L114.497 197.875C114.385 200.37 110.884 200.813 110.156 198.424L102.124 172.091C101.483 169.992 98.5168 169.992 97.8764 172.091L89.8444 198.424C89.1156 200.813 85.6154 200.37 85.5025 197.875L84.259 170.367C84.1599 168.174 81.2866 167.435 80.1453 169.309L65.8294 192.814C64.5305 194.946 61.2502 193.645 61.7604 191.199L67.3835 164.247C67.8318 162.098 65.2323 160.666 63.6617 162.197L43.9615 181.396C42.1741 183.137 39.3198 181.06 40.421 178.818L52.5574 154.113C53.525 152.144 51.3625 150.109 49.4613 151.2L25.6147 164.887C23.4511 166.129 21.2022 163.406 22.8251 161.509L40.7123 140.604C42.1384 138.937 40.5488 136.428 38.4365 137.011L11.9418 144.326C9.53794 144.99 8.03576 141.792 10.0784 140.359L32.5924 124.568C34.3874 123.309 33.4707 120.482 31.28 120.521L3.80194 121.005C1.30888 121.048 0.647761 117.576 2.98188 116.697L28.708 107.012C30.7591 106.24 30.5728 103.274 28.4413 102.765L1.7065 96.3871C-0.719138 95.8084 -0.497588 92.2805 1.98131 92.0109L29.3032 89.0403C31.4815 88.8034 32.0373 85.8839 30.099 84.8603L5.78724 72.021C3.58145 70.856 4.67171 67.4941 7.13963 67.8507L34.3405 71.7812C36.5091 72.0946 37.7722 69.4053 36.1488 67.9308L15.7877 49.4371C13.9404 47.7592 15.8308 44.7746 18.1327 45.7349L43.5034 56.3195C45.5262 57.1634 47.417 54.8733 46.2107 53.0407L31.0796 30.0546C29.7067 27.9691 32.2786 25.5493 34.2698 27.053L56.2162 43.6267C57.966 44.9481 60.3658 43.2011 59.6523 41.1255L50.7019 15.0913C49.8899 12.7293 52.9816 11.0263 54.537 12.9789L71.6801 34.5003C73.0469 36.2162 75.805 35.122 75.6291 32.9338L73.4219 5.48743C73.2216 2.99724 76.6389 2.11816 77.6607 4.39699L88.9235 29.5138C89.8214 31.5163 92.7645 31.1438 93.1372 28.9805L97.8118 1.84638Z" fill="url(#paint0_linear_103_17)"/> </g> <defs> <linearGradient id="paint0_linear_103_17" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> <clipPath id="clip0_103_17"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>')
//   const svg2 = "data:image/svg+xml;base64," + btoa('<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_234_943)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z" fill="url(#paint0_linear_234_943)"/> </g> <defs> <linearGradient id="paint0_linear_234_943" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> <clipPath id="clip0_234_943"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>')
//   const [text, count] = useTypewriter({
//     words: [
//       'Software Engineer',
//       'Full Stack Developer',
//       'Front End Developer',
//       'Back End Developer',
//     ],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   const handleClick = () => {
//     const seangpt = document.getElementById('seangpt') as HTMLElement | null;
//     if (seangpt) {
//       seangpt.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const particleMotion = {
//     initial: { opacity: 0, scale: 0.25 },
//     animate: {
//       opacity: [0, 1, 1, 0],
//       scale: [0, 1, 1, 0],
//       transition: { repeat: Infinity, duration: 1, repeatDelay: 1 },
//     },
//   };

//   return (
//     <div className="relative flex justify-center bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
//       {/* Background particles */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden grayscale">
//         <motion.img
//           src={svg1}
//           alt="Background shape"
//           className="absolute w-32 h-32 top-1/4 left-1/4 opacity-20"
//           {...particleMotion}
//         />
//         <motion.img
//           src={svg2}
//           alt="Background shape"
//           className="absolute w-24 h-24 bottom-1/3 right-1/3 opacity-20"
//           {...particleMotion}
//         />
//         <motion.img
//           src="https://shapes.framer.com/circle.svg"
//           alt="Background shape"
//           className="absolute w-40 h-40 top-1/3 right-1/4 opacity-20"
//           {...particleMotion}
//         />
//       </div>
//       </div>
//   );
// };

// export default Hero;

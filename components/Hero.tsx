import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Button from './Button';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Software Engineer',
      'Full Stack Developer',
      'Front End Developer',
      'Back End Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // when the button is clicked, scroll to the seangpt section
  const handleClick = () => {
    const seangpt = document.getElementById('seangpt') as HTMLElement | null;
    if (seangpt) {
      seangpt.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="flex justify-center bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Image with soft border and shadow */}
          <div className="flex justify-center px-8">
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Sean Hatfield"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>

          <div className="flex-grow max-w-lg lg:max-w-xl lg:w-1/2">
            <h1 className="text-5xl text-white font-bold leading-tight mb-4">
              Hi, I&apos;m{' '}
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

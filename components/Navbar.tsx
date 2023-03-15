import Link from 'next/link';
import { FaHome, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // when button is clicked, scroll to the seangpt section
  const handleClick = () => {
    const seangpt = document.getElementById('seangpt') as HTMLElement | null;
    if (seangpt) {
      seangpt.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch lg:justify-center md:justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center mr-10 lg:mt-6">
              <Link href="/">
                <span className="flex items-center text-white font-bold text-xl">
                  <FaHome />
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {/* Add your menu items here */}
              <Link href="/about">
                <span className="text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  About
                </span>
              </Link>
              <Link href="/experience">
                <span className="text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Experience
                </span>
              </Link>
              <Link href="/skills">
                <span className="text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Skills
                </span>
              </Link>
              <Link href="/projects">
                <span className="text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Projects
                </span>
              </Link>
              <span className="text-white relative cursor-pointer">
                <Link href="/">
                  <span>
                    <button onClick={handleClick} className="flex items-center justify-center font-inter font-medium text-xl bg-blue-600 rounded-2xl px-3 mt-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      SeanGPT
                    </button>
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>


      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 py-3`}>
  <div className="px-4 pt-2 pb-3 space-y-4">
    <Link href="/about">
      <span className="block text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        About
      </span>
    </Link>
    <Link href="/experience">
      <span className="block text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        Experience
      </span>
    </Link>
    <Link href="/skills">
      <span className="block text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        Skills
      </span>
    </Link>
    <Link href="/projects">
      <span className="block text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        Projects
      </span>
    </Link>
    <Link href="/">
      <button onClick={handleClick} className="block text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        SeanGPT
      </button>
    </Link>
  </div>
</div>



      </div>
    </nav>
  );
};

export default Navbar;

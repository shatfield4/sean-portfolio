import Link from 'next/link';
import { FaHome, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center text-white font-bold text-xl">
                <FaHome />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-4">
              {/* Add your menu items here */}
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="mt-2">
            <Link href="/experience">
              <span className="block px-3 py-2 text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Experience
              </span>
            </Link>
            <Link href="/skills">
              <span className="block px-3 py-2 text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Skills
              </span>
            </Link>
            <Link href="/projects">
              <span className="block px-3 py-2 text-gray-300 hover:text-white font-medium text-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

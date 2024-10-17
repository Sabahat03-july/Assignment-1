import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-100 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Assignment 01</span>
          </Link>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-blue-600 cursor-pointer">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:text-blue-600 cursor-pointer">
              About
            </Link>
            <Link href="#error" className="mr-5 hover:text-blue-600 cursor-pointer">
              Error
            </Link>
            <Link href="#Contact" className="mr-5 hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
            <Link href="#loading-screen" className="mr-5 hover:text-blue-600 cursor-pointer">
              Loading
            </Link>
            <Link href="#skill" className="mr-5 hover:text-blue-600 cursor-pointer">
              Skills
            </Link>
          </nav>

          {/* LinkedIn Button */}
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="flex items-center cursor-pointer">
              Linkedin
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

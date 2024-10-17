'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

// Image ko import kijiye
import sabahatProfile from '../../../public/asests/sabahat-profile.jpg';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-blue-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer', 'Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
              I am Sabahat, and I am a student of GIAIC. I am currently taking a course in Cloud Computing and Native Generative AI. This is my first assignment given to me by Sir Mubasir from the Governor House.
            </p>
            <div className="flex justify-center">
              <Link href="#Contact">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* Image ko import kiya gaya hai ab yaha pe direct use karein */}
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem border-radius cursor:pointer]"
              alt="hero"
              height={300}
              width={300}
              src={sabahatProfile}  
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

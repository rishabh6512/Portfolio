'use client';
import Image from "next/image";
import ProfileImage from "../assets/profile.jpg";
import { Typewriter } from 'react-simple-typewriter';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-6">
      <div className="cursor-pointer hover:opacity-90 transition-opacity duration-200 w-fit">
        <Image
          src={ProfileImage}
          alt="Rishabh Sharma - Fresher"
          className="rounded-full object-cover w-[100px] h-[100px] border-2"
          priority
        />
      </div>

      <h1 className="font-medium text-gray-100 mt-4 text-xl font-heading">
        <Typewriter
          words={[
            "I am Rishabh Sharma",
            "Full-Stack Developer",
            "Always Learning"
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
      <p className="text-gray-400 mt-2">Fresher</p>
    </div>
  );
}
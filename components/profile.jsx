"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ProfileImage from "../assets/profile.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center mt-6">
      {/* Profile Image with animated rainbow gradient border */}
      <div className="relative w-[110px] h-[110px] flex items-center justify-center">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-400 animate-spin-slow"></div>
      
        {/* Inner circle*/}
        <div className="absolute inset-1 rounded-full bg-gray-900"></div>

        {/* Profile Image */}
        <div className="rounded-full overflow-hidden w-[100px] h-[100px] relative z-10 border-2 border-gray-800">
          <Image
            src={ProfileImage}
            alt="Rishabh Sharma - Fresher"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Animated Name */}
      <h1 className="font-medium text-gray-100 mt-4 text-xl font-heading h-8">
        <Typewriter
          words={["I'm Rishabh Sharma", "Full-Stack Developer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

      {/* Role */}
      <p className="text-gray-400 mt-2">Fresher</p>
    </div>
  );
}
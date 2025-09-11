'use client';
import Image from "next/image";
import ProfileImage from "../images/profile.jpg";

export default function Profile() {

  return (
    <div>
      <div
        className="cursor-pointer hover:opacity-90 transition-opacity duration-200 w-fit"
      >
        <Image
          src={ProfileImage}
          alt="Rishabh Sharma - Fresher"
          className="rounded-full object-cover w-[100px] h-[100px] border-2"
          priority
        />
      </div>

      <h1 className="font-medium text-gray-100 mt-2 text-xl font-heading">
        Rishabh Sharma
      </h1>
      <p className="text-gray-400">Fresher</p>
    </div>
  );
}
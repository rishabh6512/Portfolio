'use client';
import Image from "next/image";
import TwitterIcon from "../assets/x.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";

export default function Social() {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-row gap-x-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/rishabh6512"
          className="transition-transform hover:scale-110"
        >
          <Image src={TwitterIcon} alt="Twitter" width={25} height={25} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/rishabh6512"
          className="transition-transform hover:scale-110"
        >
          <Image src={GithubIcon} alt="GitHub" width={25} height={25} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rishabh-sharma-b690b0384/"
          className="transition-transform hover:scale-110"
        >
          <Image src={LinkedinIcon} alt="LinkedIn" width={25} height={25} />
        </a>
      </div>
    </div>
  );
}
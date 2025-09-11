import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex flex-row justify-between items-center mt-6">
      <div className="flex flex-row gap-x-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/rishabh6512"
          className="text-gray-300 hover:text-[#1DA1F2] transition-colors"
        >
          <FaTwitter size={25} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/rishabh6512"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub size={25} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rishabh651200/"
          className="text-gray-300 hover:text-[#0A66C2] transition-colors"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
}
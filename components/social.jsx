import Image from "next/image";
import XLogo from "../images/x.png";
import linkedLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";

export default function Social() {
  return (
    <div className="flex flex-row justify-between items-center mt-6">
      <div className="flex flex-row gap-x-3">
        <a target="_blank" rel="noreferrer" href="https://x.com/rishabh6512">
          <Image
            alt="Twitter"
            loading="lazy"
            width="18"
            height="18"
            decoding="async"
            data-nimg="1"
            src={XLogo}
            style={{ color: "transparent" }}
            className="mt-1 "
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/rishabh6512">
          <Image
            alt="Github"
            loading="lazy"
            width="22"
            height="22"
            decoding="async"
            data-nimg="1"
            src={githubLogo}
            style={{ color: "transparent" }}
            className="ml-1"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rishabh651200/"
        >
          <Image
            alt="Linkedin"
            loading="lazy"
            width="22"
            height="22"
            decoding="async"
            data-nimg="1"
            src={linkedLogo}
            style={{ color: "transparent" }}
            className="mt-0.5 ml-1"
          />
        </a>
      </div>
    </div>
  );
}

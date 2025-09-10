"use client";
import { FaReact, FaJs, FaBootstrap, FaJava, FaDocker, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSpring, SiHibernate, SiWordpress, SiPhp} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const skills = {
        frontend: [
            { name: "Java", icon: <FaJava className="text-red-500 text-xl" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-xl" /> },
            { name: "React", icon: <FaReact className="text-blue-500 text-xl" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-xl" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500 text-xl" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-xl" /> },
            { name: "Wordpress", icon: <SiWordpress className="text-blue-500 text-xl"/> },
        ],
        backend: [
            {name: "SpringBoot", icon: <SiSpring className="text-green-500 text-xl"/>},
            { name: "Hibernate", icon: <SiHibernate className="text-xl" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl" /> },
            { name: "Express.js", icon: <SiExpress className="text-xl" /> },
            { name: "REST APIs", icon: <TbApi className="text-blue-500 text-xl" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-xl" /> },
            { name: "PHP", icon: <SiPhp className="text-indigo-700 text-xl" /> },
        ],
        devopsAndDatabase: [
            { name: "Docker", icon: <FaDocker className="text-blue-600 text-xl" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-700 text-xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
        ],
        versionControl: [
            {name: "Git", icon: <FaGithub className="text-xl" />}
        ],
}
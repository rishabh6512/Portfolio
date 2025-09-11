import ReactIcon from "../assets/react.svg";
import JsIcon from "../assets/js.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import JavaIcon from "../assets/java.svg";
import DockerIcon from "../assets/docker.svg";
import NodeIcon from "../assets/nodejs.svg";
import NextIcon from "../assets/nextjs.svg";
import TailwindIcon from "../assets/tailwind.svg";
import ExpressIcon from "../assets/express.svg";
import MongoIcon from "../assets/mongodb.svg";
import MysqlIcon from "../assets/mysql.svg";
import SpringIcon from "../assets/spring.svg";
import WordpressIcon from "../assets/wordpress.svg";
import PhpIcon from "../assets/php.svg";
import ApiIcon from "../assets/api.svg";
import GithubIcon from "../assets/github.svg";

export const skills = {
    frontend: [
        { name: "Java", icon: JavaIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "React", icon: ReactIcon },
        { name: "Next.js", icon: NextIcon },
        { name: "Tailwind", icon: TailwindIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
        { name: "Wordpress", icon: WordpressIcon },
    ],
    backend: [
        { name: "SpringBoot", icon: SpringIcon },
        { name: "Node.js", icon: NodeIcon },
        { name: "Express.js", icon: ExpressIcon },
        { name: "REST APIs", icon: ApiIcon },
        { name: "Next.js", icon: NextIcon },
        { name: "PHP", icon: PhpIcon },
    ],
    devopsAndDatabase: [
        { name: "Docker", icon: DockerIcon },
        { name: "MySQL", icon: MysqlIcon },
        { name: "MongoDB", icon: MongoIcon },
    ],
    versionControl: [
        { name: "Git", icon: GithubIcon },
    ],
};
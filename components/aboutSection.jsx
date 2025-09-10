"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "./skillsData.jsx";
// import { FaReact, FaJs, FaBootstrap, FaJava } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
// import { TbApi } from "react-icons/tb";

const SkillCard = ({ icon, name }) => (
    <div className="flex flex-row items-center
                                    gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300
                                    transition-colors">
        {icon}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
);

export default function AboutSection() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    // const frontend = [
    //     {
    //         name: "JavaScript (ES6+)",
    //         icon: <FaJs className="text-yellow-500" />,
    //     },
    //     { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    //     { name: "Next.js", icon: <SiNextdotjs /> },
    //     {
    //         name: "Tailwind CSS",
    //         icon: <SiTailwindcss className="text-teal-500" />,
    //     },
    //     {
    //         name: "Bootstrap",
    //         icon: <FaBootstrap className="text-purple-600" />,
    //     },
    //     { name: "Java", icon: <FaJava className="text-red-500" /> },
    // ];

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-3xl mb-auto"
            onClick={() => setSelectedId(null)}
        >
            <div>
                <p className="text-gray-500 text-[16px] font-normal leading-relaxed">
                    I am a passionate and driven{" "}
                    <span className="text-gray-700 font-medium">
                        Full-Stack Developer
                    </span>{" "}
                    with a strong foundation in modern web technologies. I specialize in
                    building dynamic user interfaces with{" "}
                    <span className="text-gray-700 font-medium">
                        React.js, Next.js, and Tailwind CSS
                    </span>
                    , and developing robust server-side applications using{" "}
                    <span className="text-gray-700 font-medium">Node.js and MySQL</span>
                    . My goal is to translate user needs into functional and beautiful
                    digital experiences. I am a quick learner, a collaborative team
                    player, and I&apos;m actively seeking an opportunity to apply my
                    skills to solve real-world problems.
                </p>
            </div>
            <div className="mt-8">
                <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-12 ms-4">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
                            <div className="text-md font-medium text-gray-900">
                                Web Developer Intern
                            </div>
                            <div className="flex whitespace-nowrap ml-2 text-xs rounded-full px-2 py-1 bg-green-100 text-green-700">
                                2025 - Present
                            </div>
                        </div>
                        <div className="mb-3 text-sm font-medium text-gray-600">
                            EasyBytz
                        </div>
                        <div className="mb-4 text-sm text-gray-600 leading-relaxed">
                            • Led development of 5+ enterprise SaaS applications serving
                            10,000+ users
                            <br />
                            • Integrated payment gateways (Stripe, PayStack) processing
                            $40K+ transactions
                            <br />• Implemented real-time features using Socket.io,
                            improving user engagement by 60%
                        </div>
                    </li>
                    <li className="mb-12 ms-4">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
                            <div className="text-md font-medium text-gray-900">
                                Web Development Training
                            </div>
                            <div className="flex whitespace-nowrap ml-2 text-xs rounded-full px-2 py-1 bg-gray-100 text-gray-600">
                                06/2022 - 07/2022
                            </div>
                        </div>
                        <div className="mb-3 text-sm font-medium text-gray-600">
                            Internshala
                        </div>
                        <div className="mb-4 text-sm text-gray-600 leading-relaxed">
                            • During this online training program with Internshala, I
                            acquired comprehensive skills in web development, including
                            HTML, CSS, JavaScript, React.js, Bootstrap, Database Management
                            Systems (DBMS), PHP, and more.
                            <br />• Through practical exercises and hands-on projects, I
                            gained proficiency in building dynamic and responsive web
                            applications. This training equipped me with the necessary
                            tools.
                        </div>
                    </li>
                </ol>
            </div>

            <div class="mt-8">
                <h1 class="font-medium text-gray-900 mb-4 text-lg">Skills</h1>
                <div class="space-y-6">
                    <div>
                        <h2 class="text-sm font-medium text-gray-700 mb-3">Frontend</h2>
                        <div class="flex flex-wrap gap-3">
                            {skills.frontend.map((skill) => (
                                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 class="text-sm font-medium text-gray-700 mb-3">Backend</h2>
                        <div class="flex flex-wrap gap-3">
                            {skills.backend.map((skill) => (
                                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 class="text-sm font-medium text-gray-700 mb-3">
                            DevOps & Database
                        </h2>
                        <div class="flex flex-wrap gap-3">
                            {skills.devopsAndDatabase.map((skill) => (
                                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 class="text-sm font-medium text-gray-700 mb-3">
                            Version Control
                        </h2>
                        <div class="flex flex-wrap gap-2">
                            {skills.versionControl.map((skill) => (
                                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h1 className="font-medium text-gray-900 mb-4 text-lg">Education</h1>
                <div className="flex flex-row items-center gap-2 mb-2">
                    <div className="text-md font-medium text-gray-900">
                        Chandigarh University | Mohali, Punjab
                    </div>
                    <div className="flex whitespace-nowrap ml-2 text-xs rounded-full px-2 py-1 bg-gray-100 text-gray-600">
                        2020 - 2024
                    </div>
                </div>
                <div className="mb-3 text-sm font-medium text-gray-600">
                    Bachelor of Engineering in Computer Science Engineering
                </div>
            </div>
        </motion.div>
    );
}

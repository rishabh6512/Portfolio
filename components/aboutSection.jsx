"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { skills } from "./skillsData.jsx";
import dynamic from "next/dynamic";

// Lazy load Next.js Image
const LazyImage = dynamic(() => import("next/image"), { ssr: false });

const SkillCard = ({ icon, name }) => (
    <div className="flex flex-row items-center gap-1 px-3 py-1 text-sm bg-gray-800 text-gray-200 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
        <LazyImage src={icon} alt={name} width={20} height={20} />
        <span className="text-sm font-medium text-gray-200">{name}</span>
    </div>
);

export default function AboutSection() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [visibleCategories, setVisibleCategories] = useState([]);
    const containerRefs = useRef({});

    useEffect(() => {
        const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Intersection Observer to lazy-load skills per category
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const category = entry.target.getAttribute("data-category");
                        setVisibleCategories((prev) => [...new Set([...prev, category])]);
                    }
                });
            },
            { rootMargin: "0px 0px -100px 0px" }
        );

        Object.values(containerRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-3xl mb-auto bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg"
        >
            {/* About Text */}
            <div>
                <p className="text-gray-300 text-[16px] font-normal leading-relaxed">
                    I am a passionate and driven{" "}
                    <span className="text-white font-medium">Full-Stack Developer</span>{" "}
                    with a strong foundation in modern web technologies. I specialize in
                    building dynamic user interfaces with{" "}
                    <span className="text-white font-medium">
                        React.js, Next.js, and Tailwind CSS
                    </span>
                    , and developing robust server-side applications using{" "}
                    <span className="text-white font-medium">Node.js and MySQL</span>. My
                    goal is to translate user needs into functional and beautiful digital
                    experiences. I am a quick learner, a collaborative team player, and
                    I&apos;m actively seeking an opportunity to apply my skills to solve
                    real-world problems.
                </p>
            </div>

            {/* Experience Section */}
            <div className="mt-8">
                <h1 className="font-medium text-white mb-4 text-lg">Experience</h1>
                <ol className="relative border-s border-gray-700">
                    <li className="mb-12 ms-4">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border"></div>
                            <div className="text-md font-medium text-white">
                                Web Developer Intern
                            </div>
                            <div className="flex whitespace-nowrap ml-2 text-xs rounded-full px-2 py-1 bg-green-900 text-green-200">
                                2025 - Present
                            </div>
                        </div>
                        <div className="mb-3 text-sm font-medium text-gray-300">EasyBytz</div>
                        <div className="mb-4 text-sm text-gray-400 leading-relaxed">
                            • Led development of 5+ enterprise SaaS applications serving 10,000+
                            users
                            <br />
                            • Integrated payment gateways (Stripe, PayStack) processing $40K+
                            transactions
                            <br />
                            • Implemented real-time features using Socket.io, improving user
                            engagement by 60%
                        </div>
                    </li>
                    <li className="mb-12 ms-4">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border"></div>
                            <div className="text-md font-medium text-white">
                                Web Development Training
                            </div>
                            <div className="flex whitespace-nowrap ml-2 text-xs rounded-full px-2 py-1 bg-gray-800 text-gray-200">
                                06/2022 - 07/2022
                            </div>
                        </div>
                        <div className="mb-3 text-sm font-medium text-gray-300">Internshala</div>
                        <div className="mb-4 text-sm text-gray-400 leading-relaxed">
                            • During this online training program with Internshala, I acquired
                            comprehensive skills in web development, including HTML, CSS,
                            JavaScript, React.js, Bootstrap, Database Management Systems (DBMS),
                            PHP, and more.
                            <br />
                            • Through practical exercises and hands-on projects, I gained
                            proficiency in building dynamic and responsive web applications.
                        </div>
                    </li>
                </ol>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
                <h1 className="font-medium text-white mb-4 text-lg">Skills</h1>
                <div className="space-y-6">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category}>
                            <h2 className="text-sm font-medium text-gray-300 mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h2>
                            <div className="flex flex-wrap gap-3">
                                {skillList.map((skill) => (
                                    <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
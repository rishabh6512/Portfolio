"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import close from "../images/close.svg";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "Ecommerce Shopping API",
      description: "Ecommerce Shopping API is an online e-commerce app which provides the facility for online shopping from any location. A backend API project for this website developed using Java and Spring Framework.",
      technologies: ["Java", "Spring Boot", "Spring Web", "Spring-Data-Rest", "Spring-Data-JPA", "Swagger", "ReactJS"],
      demoLink: "",
      githubLink: "https://github.com/rishabh6512/backend-ecommerce-java"
    },
    {
      id: 2,
      title: "Student Result Management System",
      description: "Student Result Management System (SRMS) is a web application designed to facilitate the efficient storage and management of student information and academic results.",
      technologies: ["HTML", "CSS", "BootStrap", "JavaScript", "PHP", "Babel", "MYSQL"],
      demoLink: "https://result-management-system.zya.me/",
      githubLink: "https://github.com/rishabh6512/Student-Result-Management-System/"
    },
    {
      id: 3,
      title: "Pglife",
      description: "an online booking website, using HTML, CSS, JavaScript, MySQL. This project involved creating a userfriendly frontend interface with HTML, CSS, and JavaScript, managing the database with MySQL, and handling server-side functionality and logic using PHP.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "https://pglife-0v3a.zya.me/home.php",
      githubLink: "https://github.com/rishabh6512/pglife"
    },
    {
      id: 4,
      title: "Foodiezz",
      description: "Foodiezz is a practice project where I developed a restaurant website using HTML, CSS, JavaScript, and Bootstrap. This project allowed me to hone my skills in frontend development and backend development and familiarize myself with popular web development technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "BootStrap", "MySQL"],
      demoLink: "https://foodiezz-restaurant-website.vercel.app/",
      githubLink: "https://github.com/rishabh6512/foodiezz/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
      onClick={() => setSelectedId(null)}
    >
      <div >
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-3 gap-y-2">
          {projects.map((project) => (
            <motion.div
              id="project"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="mt-3 cursor-pointer p-6 rounded-lg bg-white border border-gray-100"
            >
              <div className="text-lg mb-2 font-medium text-gray-900">
                {project.title}
              </div>
              <div className="text-sm font-normal text-gray-500 mb-4">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  href={project.demoLink}
                  className="text-sm text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </Link>
                <Link
                  href={project.githubLink}
                  className="text-sm text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </Link>
              </div>
            </motion.div>
          ))}
          {isLargeScreen ? (
            <AnimatePresence>
              {selectedId &&
                projects
                  .filter((project) => project.id === selectedId)
                  .map((project) => (
                    <motion.div
                      id="project"
                      key={project.id}
                      animate={{ 
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                        scale: 1.02
                      }}
                      layoutId={selectedId}
                      className="absolute top-[29%] left-[9%] shadow-lg p-8 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <motion.h2 className="text-xl font-medium">
                          {project.title}
                        </motion.h2>
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="border p-1 rounded-lg hover:bg-slate-100"
                        >
                          <Image
                            src={close}
                            width={15}
                            height={15}
                            alt="close"
                          />
                        </motion.button>
                      </div>
                      <motion.p className="text-gray-600 mb-6">
                        {project.description}
                      </motion.p>
                      <motion.div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                      <div className="flex gap-4">
                        <Link
                          href={project.demoLink}
                          className="bg-gray-900 hover:bg-gray-700 text-sm text-white px-4 py-2 rounded-md transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Demo
                        </Link>
                        <Link
                          href={project.githubLink}
                          className="bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 px-4 py-2 rounded-md transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </Link>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
} 
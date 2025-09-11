"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleDemoClick = (e, demoLink) => {
    if (!demoLink) {
      e.preventDefault();
      setShowToast(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-darkBlue py-10 px-4 flex justify-center rounded-t-lg">
      <div className="w-full max-w-3xl">
        <Toast showToast={showToast} />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-auto"
          onClick={() => setSelectedId(null)}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedId(project.id)}
                onDemoClick={handleDemoClick}
              />
            ))}
          </div>
        </motion.div>

        {isLargeScreen && (
          <AnimatePresence>
            {selectedId && (
              <ProjectDetail
                project={projects.find((p) => p.id === selectedId)}
                onClose={() => setSelectedId(null)}
                onDemoClick={handleDemoClick}
              />
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

function Toast({ showToast }) {
  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50, transition: { ease: "easeOut", duration: 0.3 } }}
          className="fixed top-5 z-50 flex items-center bg-blue-900 border border-blue-800 rounded-lg shadow-lg p-4"
        >
          <p className="text-gray-200 font-medium">
            🚧 Project still in progress! ⏳
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, onSelect, onDemoClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onSelect}
      className="cursor-pointer p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-700 transition-colors"
    >
      <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.split(",").map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Link
          href={project.demoLink || "#"}
          onClick={(e) => onDemoClick(e, project.demoLink)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Live Demo →
        </Link>
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          GitHub →
        </Link>
      </div>
    </motion.div>
  );
}

function ProjectDetail({ project, onClose, onDemoClick }) {
  return (
    <motion.div
      layoutId={project.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute top-[29%] left-[9%] p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-[calc(100%-4rem)] max-w-2xl"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Image src={close} width={20} height={20} alt="close" />
        </button>
      </div>
      <p className="text-gray-400 mb-6">{project.description}</p>
      <div className="mb-6">
        <h4 className="text-sm font-medium text-white mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.split(",").map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          href={project.demoLink || "#"}
          onClick={(e) => onDemoClick(e, project.demoLink)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-900 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md transition-colors"
        >
          View Demo
        </Link>
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm px-4 py-2 rounded-md transition-colors"
        >
          View Code
        </Link>
      </div>
    </motion.div>
  );
}
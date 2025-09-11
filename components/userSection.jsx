"use client"
import { motion } from 'framer-motion';

const UsesSection = () => {
  return (
    <motion.section
      className="text-gray-200 bg-gray-900 max-w-3xl mx-auto p-6 rounded-lg shadow-lg mb-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        Tools & Technologies
      </motion.h2>
      <motion.p className="mb-8 text-gray-400 leading-relaxed" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        Welcome to the tools I use! Here’s a breakdown of software, libraries, and frameworks that power my projects and streamline development, design, and deployment.
      </motion.p>

      <div className="space-y-6">
        <Section
          title="Code Editor"
          items={[
            { name: "VS Code", description: "Customizable and feature-rich editor with extensions that boost productivity." },
          ]}
        />

        <Section
          title="Frameworks & Libraries"
          items={[
            { name: "React", description: "For building reactive and dynamic user interfaces with reusable components." },
            { name: "Framer Motion", description: "Smooth animations to enhance user experience." },
            { name: "Tailwind CSS", description: "Utility-first CSS for rapid, responsive designs." },
          ]}
        />

        <Section
          title="Backend"
          items={[
            { name: "MySQL", description: "Structured relational database for efficient data management." },
            { name: "Express.js", description: "Lightweight web framework for building APIs and server-side apps." },
            { name: "Node.js", description: "Scalable JavaScript runtime for building network applications." },
            { name: "Next.js", description: "Full-stack framework offering routing, SSR, and optimization tools." },
          ]}
        />

        <Section
          title="Version Control"
          items={[
            { name: "Git", description: "Track changes and collaborate on projects seamlessly." },
            { name: "GitHub", description: "Host, share, and review code repositories online." },
          ]}
        />

        <Section
          title="Design Tools"
          items={[
            { name: "Figma", description: "Create prototypes, wireframes, and collaborate on designs." }
          ]}
        />
      </div>
    </motion.section>
  );
};

const Section = ({ title, items }) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">{title}</h3>
      <ul className="space-y-3 text-gray-300">
        {items.map((item, index) => (
          <motion.li key={index} initial={{ x: -20 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <strong className="text-white">{item.name}</strong>: {item.description}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UsesSection;
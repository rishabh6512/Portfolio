"use client"
import { motion } from 'framer-motion';

const UsesSection = () => {
  return (
    <motion.section
      className="text-black bg-white max-w-3xl mb-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="text-xl font-bold mb-6" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        Uses
      </motion.h2>
      <motion.p className="mb-6 text-gray-600" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        Welcome to the Uses section of my portfolio! Here, I highlight the tools, technologies, and software that I rely on to build and enhance my portfolio. Each item plays a crucial role in my development process, ensuring a seamless and professional online presence.
      </motion.p>

      <Section
        title="Code Editor"
        items={[
          { name: "VS Code", description: "My go-to code editor, equipped with numerous extensions and customization options that streamline my coding experience." },
        ]}
      />

      <Section
        title="Frameworks & Libraries"
        items={[
          { name: "React", description: "A powerful JavaScript library for building user interfaces, enabling me to create dynamic and responsive components." },
          { name: "Framer Motion", description: "An animation library for React, allowing me to add smooth and engaging animations to my projects." },
          { name: "Tailwind CSS", description: "A utility-first CSS framework that helps me quickly design modern and responsive layouts." },
        ]}
      />

      <Section
        title="MERN Stack"
        items={[
          { name: "MongoDB", description: "A NoSQL database that provides flexibility and scalability for storing and managing data." },
          { name: "Express.js", description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." },
          { name: "React", description: "A JavaScript library for building user interfaces, particularly single-page applications." },
          { name: "Node.js", description: "A JavaScript runtime built on Chromes V8 JavaScript engine, allowing me to build scalable network applications." },
        ]}
      />

      <Section
        title="Version Control"
        items={[
          { name: "Git", description: "Essential for tracking changes and collaborating on projects. Git keeps my work organized and allows for efficient version management." },
          { name: "GitHub", description: "My preferred platform for hosting and sharing code repositories, facilitating collaboration and showcasing my projects." },
        ]}
      />

      <Section
        title="Design Tools"
        items={[
          { name: "Figma", description: "A versatile design tool that aids in creating wireframes, prototypes, and visual designs, ensuring a cohesive look and feel for my projects." },
          { name: "Adobe XD", description: "Another powerful tool for designing and prototyping user interfaces, helping me bring my design ideas to life." },
        ]}
      />

      <Section
        title="Deployment"
        items={[
          { name: "Netlify", description: "A reliable platform for deploying and hosting my portfolio, providing continuous deployment and fast, secure hosting." },
          { name: "Vercel", description: "An alternative deployment platform that specializes in hosting front-end frameworks and static sites, ensuring optimal performance and scalability." },
        ]}
      />
    </motion.section>
  );
};

const Section = ({ title, items }) => {
  return (
    <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-600">
        {items.map((item, index) => (
          <motion.li key={index} className="mb-2" initial={{ x: -20 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <strong>{item.name}</strong> - {item.description}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UsesSection;

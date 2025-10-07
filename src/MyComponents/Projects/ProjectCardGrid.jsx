import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Card3D = ({ project, index }) => (
  <motion.div
    className="relative h-96 rounded-2xl overflow-hidden"
    style={{ perspective: "1000px" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="relative w-full h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
          {project.description}
        </p>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
        >
          View Project <ArrowUpRight size={14} />
        </motion.a>
      </div>
      <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full font-medium shadow-md">
        Client Work
      </div>
    </div>
  </motion.div>
);

const ProjectCardGrid = ({ projects }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mb-12 text-center">
      <motion.span
        className="block mb-3 text-sm font-medium tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        CLIENT PROJECTS
      </motion.span>
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Work
      </motion.h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <Card3D key={p.title} project={p} index={i} />
      ))}
    </div>

    <div className="mt-16 text-center">
      <motion.a
        href="/projects"
        className="inline-flex items-center justify-center px-8 py-3 border-2 border-black bg-white text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Projects
      </motion.a>
    </div>
  </div>
);

export default ProjectCardGrid;

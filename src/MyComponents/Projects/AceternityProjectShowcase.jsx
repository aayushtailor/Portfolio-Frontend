import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  X,
  ChevronUp,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import "./macbook-scroll.css";

const AceternityProjectShowcase = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsRef = useRef(null);

  // ✅ Projects data (local images)
  const projectCards = [
    {
      title: "Gloria Jewellery",
      description:
        "A full-stack eCommerce platform for a premium jewellery brand, built with Node.js, Express, MongoDB, and a custom admin dashboard.",
      image: "gloriya.png",
      link: "https://www.gloriya.in/",
      category: "Client Work",
      tags: ["Node.js", "Express.js", "MongoDB", "HTML", "Bootstrap"],
      featured: true,
      features: [
        "Custom admin dashboard for product, customer & order management",
        "Dynamic storefront using RESTful APIs",
        "Responsive UI optimized for mobile and desktop",
        "Secure admin authentication system",
      ],
    },
    {
      title: "Nehru Garden Boating",
      description:
        "Udaipur’s official online boat ride booking website with live Razorpay integration and admin dashboard.",
      image: "nehru.png",
      link: "https://nehrugardenboating.com",
      category: "Client Work",
      tags: ["Flask", "Python", "MySQL", "Razorpay", "SEO"],
      featured: true,
      features: [
        "Online boat ride booking with live payments",
        "QR code ticketing system",
        "Admin dashboard with login authentication",
        "SEO optimization and blog system",
      ],
    },
    {
      title: "BizConnect",
      description:
        "A vendor networking platform connecting local businesses with clients — complete with admin verification and vendor dashboards.",
      image: "bizconnect.png",
      link: "https://yessoftech.com/marwariconnect",
      category: "Client Work",
      tags: ["Flask", "HTML", "CSS", "JavaScript", "MongoDB"],
      featured: true,
      features: [
        "Vendor dashboard with profile management",
        "Admin panel for verification and data control",
        "Image compression and email verification system",
        "Flask-based backend with MongoDB",
      ],
    },
    {
      title: "Mind Tranquil",
      description:
        "A psychology appointment booking site with WhatsApp-based instant communication system.",
      image: "mindtranquil.png",
      link: "https://drmahikhandelwal.com",
      category: "Client Work",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      featured: false,
      features: [
        "WhatsApp integration with pre-filled messages",
        "Mobile-friendly appointment booking form",
        "Input validation and smooth UI feedback",
        "Custom-styled brand theme",
      ],
    },
  ];

  // ✅ Helper to get image from public folder (works in dev & build)
  const getImagePath = (img) =>
    `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`;

  const categories = [
    "all",
    ...new Set(projectCards.map((p) => p.category.toLowerCase())),
  ];

  const filteredProjects = projectCards.filter(
    (p) => filter === "all" || p.category.toLowerCase() === filter
  );

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setVisibleProjects(6), [filter]);

  const scrollToTop = () =>
    window.scrollTo({
      top: projectsRef.current.offsetTop - 100,
      behavior: "smooth",
    });

  const loadMoreProjects = () => setVisibleProjects((prev) => prev + 6);

  const currentProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <div className="w-full py-8" ref={projectsRef}>
      {/* 🔘 Filter Buttons */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 flex items-center shadow-md overflow-x-auto max-w-full scrollbar-hide">
            <div className="flex px-2 py-1 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`relative whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    filter === category
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter === category && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-black"
                      layoutId="activeCategoryBg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{category}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🧱 Project Cards Grid */}
      <div className="px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              staggerChildren: 0.1,
              when: "beforeChildren",
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project <ArrowUpRight size={14} />
                    </a>
                    {project.featured && (
                      <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-2.5 py-0.5 font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 🔽 Load More Button */}
        {filteredProjects.length > visibleProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={loadMoreProjects}
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm transition-all duration-300 hover:shadow"
            >
              Load more projects
              <ChevronDown size={18} />
            </button>
          </motion.div>
        )}
      </div>

      {/* ⬆ Scroll to Top */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg z-40"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}

      {/* 🔍 Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          getImagePath={getImagePath}
        />
      )}
    </div>
  );
};

// ✅ Project Modal
const ProjectModal = ({ project, onClose, getImagePath }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9998] flex items-start justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="fixed top-[90px] right-6 sm:right-10 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={22} className="text-gray-800 sm:w-6 sm:h-6" />
        </button>

        {/* Modal Content */}
        <motion.div
          className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mt-[140px] max-h-[80vh] flex flex-col"
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            {/* 🖼 Image */}
            {images.length > 0 && (
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={getImagePath(images[currentImageIndex])}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* 📄 Details */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-6">{project.description}</p>

              {project.features && (
                <>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition"
              >
                <ExternalLink size={16} className="mr-2" /> Visit Project
              </a>

              <p className="mt-6 text-xs text-gray-500">
                Client Project by YES Softech
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AceternityProjectShowcase;

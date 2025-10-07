import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../../components/ui/animated-text";
import AceternityProjectShowcase from "./AceternityProjectShowcase";

export default function ProjectsSection() {
  const projectCards = [
    {
      title: "Gloria Jewellery",
      description:
        "A full-stack eCommerce platform for a premium jewellery brand, built with Node.js, Express, MongoDB, and a custom admin dashboard.",
      image: "https://www.gloriya.in/assets/images/gloria-banner.jpg",
      link: "https://www.gloriya.in/",
      category: "Client Work",
      tags: ["Node.js", "Express.js", "MongoDB", "HTML", "Bootstrap"],
      featured: true,
      fullDescription: `
      <p><strong>Gloria Jewellery</strong> is a complete full-stack eCommerce solution developed by YES Softech for a jewellery brand looking to manage its online business independently.</p>
      <p>The platform features two main modules — a <strong>customer storefront</strong> built with HTML, CSS, JavaScript, and Bootstrap for a stylish, responsive experience, and a <strong>powerful admin panel</strong> powered by Node.js, Express, and MongoDB.</p>
      <p>The admin dashboard allows the client to add, edit, and delete products, manage orders and customers, and track inventory — all without any technical knowledge. APIs automatically sync with the storefront in real-time.</p>
      <p><strong>Backend hosted on Render</strong> with MongoDB Atlas integration, and planned integrations include <em>Razorpay, Cloudinary, and Etsy API</em>.</p>
      <p><strong>Objective:</strong> To empower the client with full business control, real-time management, and seamless scalability.</p>
    `,
      features: [
        "Custom admin dashboard for product, customer & order management",
        "Dynamic storefront using RESTful APIs",
        "Responsive UI optimized for mobile and desktop",
        "Secure admin authentication system",
        "Planned integrations: Razorpay, Cloudinary, Etsy API",
      ],
    },
    {
      title: "Nehru Garden Boating",
      description:
        "Udaipur's official online boat ride booking website with live Razorpay integration and admin dashboard.",
      image: "https://nehrugardenboating.com/assets/images/nehru-banner.jpg",
      link: "https://nehrugardenboating.com",
      category: "Client Work",
      tags: ["Flask", "Python", "MySQL", "Razorpay", "SEO"],
      featured: true,
      fullDescription: `
      <p><strong>Nehru Garden Boating</strong> is Udaipur's official online platform for booking boat rides at the iconic Nehru Garden. Developed by YES Softech, this project delivers a seamless and secure online booking experience for tourists.</p>
      <p>Built using <strong>Python (Flask)</strong> with a <strong>MySQL backend</strong>, it features an integrated <strong>Razorpay payment gateway</strong> for secure online transactions, <strong>QR-based ticket generation</strong>, and a dedicated <strong>admin dashboard</strong> for managing bookings.</p>
      <p>The project also includes advanced <strong>SEO optimization</strong> (sitemap, meta tags, robots.txt), a <strong>blog section</strong> for organic growth, and a robust deployment using cPanel + Passenger (WSGI).</p>
      <p><strong>Objective:</strong> To digitize Udaipur's boating experience and simplify ticketing management.</p>
    `,
      features: [
        "Online boat ride booking with live payments",
        "QR code ticketing system",
        "Admin dashboard with login authentication",
        "SEO optimization and blog system",
        "Deployed via cPanel + WSGI",
      ],
    },
    {
      title: "BizConnect",
      description:
        "A vendor networking platform connecting local businesses with clients — complete with admin verification and vendor dashboards.",
      image:
        "https://yessoftech.com/marwariconnect/assets/images/bizconnect-banner.jpg",
      link: "https://yessoftech.com/marwariconnect",
      category: "Client Work",
      tags: ["Flask", "HTML", "CSS", "JavaScript", "MongoDB"],
      featured: true,
      fullDescription: `
      <p><strong>BizConnect</strong> (formerly MarwariConnect) is a business discovery and vendor networking platform built by YES Softech to empower local businesses.</p>
      <p>It features a dual-layer system — <strong>Vendor Dashboards</strong> for self-managed listings and a <strong>central Admin Panel</strong> for verification and platform management.</p>
      <p>Admins can verify vendors, manage data, and monitor platform activity, while vendors can edit profiles, upload photos, and view engagement insights.</p>
      <p>Includes email verification, image compression, login sessions, and real-time status updates for verified vendors.</p>
      <p><strong>Objective:</strong> To create a trustworthy local business ecosystem through tech-enabled transparency.</p>
    `,
      features: [
        "Vendor dashboard with profile management",
        "Admin panel for verification and data control",
        "Image compression and email verification system",
        "Real-time vendor status updates",
        "Flask-based backend with MongoDB",
      ],
    },
    {
      title: "Mind Tranquil",
      description:
        "A psychology appointment booking site with WhatsApp-based instant communication system.",
      image:
        "https://drmahikhandelwal.com/assets/images/mindtranquil-banner.jpg",
      link: "https://drmahikhandelwal.com",
      category: "Client Work",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      featured: false,
      fullDescription: `
      <p><strong>Mind Tranquil</strong> is a responsive appointment booking platform developed for a psychology lab to simplify session scheduling.</p>
      <p>The system allows users to fill an appointment form that instantly opens WhatsApp with all details pre-filled, eliminating backend setup needs.</p>
      <p>Built using <strong>HTML5, CSS3, Bootstrap 5, and JavaScript</strong>, it delivers a clean, fast, and mobile-optimized user experience.</p>
      <p><strong>Objective:</strong> To build a lightweight, user-friendly front-end solution for easy client communication.</p>
    `,
      features: [
        "WhatsApp integration with pre-filled messages",
        "Mobile-friendly appointment booking form",
        "Input validation and smooth UI feedback",
        "Custom-styled brand theme",
        "No backend required — pure front-end solution",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-12 text-left">
          <motion.span
            className="block mb-3 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            PROJECTS
          </motion.span>
          <AnimatedText
            text="Client Work Showcase"
            className="text-3xl md:text-5xl font-bold"
            once={true}
            delay={0.1}
          />
        </div>

        <AceternityProjectShowcase projects={projectCards} />

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="/projects"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full transition-colors"
          >
            View all projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

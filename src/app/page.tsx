"use client";

import React, { useState, useEffect } from "react";
import ContactForm from "@/components/Form";
import { motion, Variants } from "framer-motion";
import {
  User,
  Home,
  GraduationCap,
  Code,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "intro", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact Me", icon: Mail },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -40% 0px", // important tweak
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className=" fixed top-0 right-0 w-full z-50 px-4 py-1 flex flex-row justify-between items-center 
                    bg-transparent mobile-blur-mask 
                    xl:top-1/2 xl:-translate-y-1/2 xl:right-4 xl:w-54 xl:flex-col xl:items-center"
      >
        <div className="w-full flex justify-between items-center xl:flex-col xl:justify-center xl:items-center">
          <motion.img
            src="/Logo.png" // replace with your logo path
            alt="KJ Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            onTap={() => scrollToSection("intro")}
            className="w-12 lg:w-16 cursor-pointer hover:scale-105 transition-transform duration-300"
          />

          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-col space-y-8 items-center mt-10">
            {sections.map((section, index) => {
              return (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", delay: index * 0.15 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-lg font-normal transition-colors ${
                    activeSection === section.id
                      ? "text-red-500 "
                      : "text-[#fffffff0] hover:text-amber-600"
                  }`}
                >
                  {<section.icon />}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-red-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="xl:hidden fixed top-16 right-4 z-50 w-[85vw] max-w-xs rounded-xl backdrop-blur-md bg-black/75 shadow-2xl text-red-500"
        >
          <div className="p-6 space-y-3">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left text-base font-medium hover:text-amber-600 transition-colors py-2 px-3 rounded-md"
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="intro"
        className="min-h-screen flex items-center justify-start px-6 relative bg-black"
      >
        <div className="relative w-[640px] h-[480px] m-auto min-[1120px]:mx-0 min-[1120px]:translate-x-[50%] min-[1120px]:-translate-y-[13%]">
          {/* Image with edge fading */}
          <motion.div
            className="absolute inset-0 bg-[url('/IMG.png')] bg-cover bg-center rounded-xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 75%, transparent 100%),
          linear-gradient(to bottom, transparent 0%, black 10%, black 75%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 85%, transparent 100%),
          linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)`,
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          ></motion.div>

          {/* Text & Button on Image */}
          <motion.div
            className="absolute 
                      bottom-4 right-4
                      sm:bottom-8 sm:right-8
                      lg:-bottom-20 lg:-right-25
                      text-white text-right max-w-md z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-black drop-shadow-lg"
              variants={itemVariants}
            >
              Karan <br />
              <span className="text-amber-400">Jadhav</span>
            </motion.h1>

            <motion.p
              className="text-lg mt-4 font-medium drop-shadow-sm"
              variants={itemVariants}
            >
              Learning. Coding. Creating.
            </motion.p>

            {/* Contact Icons */}
            <motion.div
              className="mt-6 flex items-center justify-end gap-4 text-white"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/sladereaperr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-5 h-5 text-amber-400 transition-transform" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/karanjadhav2003/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-5 h-5 text-amber-400 transition-transform" />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karanjadhav2003@gmail.com"
                target="_blank"
                aria-label="Email"
                whileHover={{ scale: 1.2 }}
              >
                <Mail className="w-5 h-5 text-amber-400 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Download Button */}
            <motion.div
              className="mt-6 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <a href="/Resume.pdf" download>
                <Button className="bg-amber-500 text-white hover:bg-amber-600 px-5 py-2 shadow-lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-sm text-gray-500">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={24} className="text-amber-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="flex items-center px-6 py-20 my-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-8">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hey, I&apos;m Karan Jadhav&mdash;a Computer Science student at
                  PES University with a deep enthusiasm for solving problems
                  through technology. While I have a strong interest in AI and
                  machine learning, my passion isn&apos;t limited to any one
                  domain. Whether it&apos;s building software systems, exploring
                  data, designing intuitive interfaces, or diving into emerging
                  tech, I&apos;m always eager to learn and explore the full
                  landscape of computer science.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in learning by doing and thrive in hands-on,
                  collaborative environments. I&apos;m currently looking for
                  opportunities&mdash;internships, research roles, or innovative
                  teams&mdash;where I can contribute, grow, and keep expanding
                  my horizon in tech.
                </p>
                <p>Let&apos;s connect and create something exciting.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="flex items-center px-6 py-20 my-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-12">
              Education
            </h2>
            <div className="space-y-8 max-w-[70vw]">
              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="text-white" />
                    <span className="text-black">PES University</span>
                  </CardTitle>
                  <CardDescription className="text-black">
                    CGPA: 8.88 • Bachelor of Technology in Computer Science •
                    2022-2026
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Graduating in 2026 from PES University with a degree in
                    Computer Science. Chosen electives include Graph Theory and
                    Data Analytics (Sem 5), and Topics in Deep Learning and
                    Generative AI (Sem 6). Earlier special topics included C++
                    and Go. Further academic experience spans core subjects such
                    as Web Tech, OS, CN, DSA, DAA, ML, DBMS, and OOAD, among
                    others.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="text-white" />
                    <span className="text-black">Deeksha CFL</span>
                  </CardTitle>
                  <CardDescription className="text-black">
                    Score: 95% • 2020-2022
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <GraduationCap className="text-white" />
                    <span className="text-black">
                      Delhi Public School Bangalore South
                    </span>
                  </CardTitle>
                  <CardDescription className="text-black">
                    Score: 92% • 2007-2020
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex items-center px-6 py-20 my-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-12">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Category: Frontend */}
              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)]">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: 0.5, // stagger float for visual interest
                      }}
                      className="flex flex-wrap gap-3"
                    >
                      {["Python", "C", "C++", "Java", "Go*"].map((skill) => (
                        <motion.li
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </motion.div>
                  </motion.ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)]">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Web Dev</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: 5 * 0.1, // stagger float for visual interest
                      }}
                      className="flex flex-wrap gap-3"
                    >
                      {[
                        "ReactJS",
                        "SQL",
                        "MongoDB",
                        "TypeScript",
                        "Next.js",
                        "Tailwind CSS",
                        "Framer Motion",
                      ].map((skill) => (
                        <motion.li
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </motion.div>
                  </motion.ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)]">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    AI & Others
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: 5 * 0.1, // stagger float for visual interest
                      }}
                      className="flex flex-wrap gap-3"
                    >
                      {[
                        "ML",
                        "DL",
                        "Numpy",
                        "Pandas",
                        "NLP",
                        "OpenCV",
                        "Langchain",
                        "Langgraph",
                        "RAG",
                        "GenAI",
                        "Selenium",
                        "Arduino",
                      ].map((skill) => (
                        <motion.li
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </motion.div>
                  </motion.ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex items-center px-6 py-20 my-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-12">
              Experience
            </h2>
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-black">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Briefcase className="text-white" />
                    <span>AI Research Intern</span>
                  </CardTitle>
                  <CardDescription>
                    ISFCR PES University • June 2024 - Aug 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">
                    Research project focusing on vulnerabilities in large
                    language models. Conducted a comprehensive survey of various
                    attacks on LLMs, including running and evaluating their
                    corresponding code implementations
                  </p>
                  {/* <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "AWS", "Docker", "PostgreSQL"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex items-center px-6 py-20 my-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-12">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-Commerce Dog Supplies Web App",
                  description:
                    "Full-stack web application development for pet supplies, using React, HTML, CSS, MongoDB (MERN Stack)",
                  tech: ["React", "Node.js", "MongoDB"],
                  link: "#",
                },
                {
                  title: "Intelligent Disaster Response Agent",
                  description:
                    "Developed an AI-powered disaster response system enabling real-time detection, decision-making, and multilingual communication. Integrated LLMs, social media analysis, and advanced RAG for enhanced crisis management.",
                  tech: [
                    "HuggingFace",
                    "Selenium",
                    "Tavily",
                    "RAG",
                    "Langchain",
                  ],
                  link: "https://github.com/sladereaperr/Intelligent-Disaster-Response-Agent",
                },
                {
                  title: "RAG for Contextual Question Answering, Summarisation",
                  description:
                    "Building context-aware question-answering systems. Developed a system using LangChain, ChromaDB, and OpenAI embeddings, optimizing retrieval across various document formats",
                  tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
                  link: "#",
                },
                {
                  title: "Attack on LLMs Survey",
                  description:
                    "Research project focusing on vulnerabilities in large language models.",
                  tech: ["Research"],
                  link: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-black">{project.title}</span>
                        {/* <Button
                          variant="ghost"
                          size="sm"
                          className="text-amber-600 hover:bg-amber-50"
                        >
                          <ExternalLink size={16} />
                        </Button> */}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="flex items-center px-6 py-20 my-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-amber-600 mb-12">
              Certifications & Achievements
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Machine Learning Specialization",
                  issuer: "Coursera, Standford University, DeepLearning.AI",
                  date: "2024",
                },
                {
                  title:
                    "Python for Computer Vision with OpenCV and Deep Learning",
                  issuer: "Udemy",
                  date: "2024",
                },
                {
                  title: "NLP with Generative AI",
                  issuer: "PESUIO",
                  date: "2024",
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-r from-amber-600 to-amber-400 backdrop-blur-sm border-none drop-shadow-[5px_10px_7px_rgba(217,119,6,0.5)] text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Award className="text-white" />
                        <span>{cert.title}</span>
                      </CardTitle>
                      <CardDescription>
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-[70vh] flex items-center px-6 py-20 my-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-5xl font-black text-amber-600 mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <ContactForm />
            {/* <form
              action="https://formspree.io/f/mvgrdang"
              method="POST"
              className="space-y-6 text-left max-w-2xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded bg-black/20 border border-white/20 text-white focus:ring-amber-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 px-8 py-3"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form> */}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Karan Jadhav</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode, FiLink } from "react-icons/fi";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Project data
  const projects = [
    {
      id: 1,
      title: "Business Analysis & Process Management",
      description:
      "A structured approach to analyzing business needs and improving process efficiency.",
      image: "CERTIFICATES/Business Analysis & Process Management_page-0001.png",
      category: "Coursera",
      tech: ["Business Analysis","Process Management","Workflow Mapping","Requirements","Optimization"],
      githubLink: "https://www.coursera.org/account/accomplishments/verify/LQ3R9KEHPTC3",
      longDescription: `This certification focuses on understanding business needs and improving organizational processes through structured analysis. It covers core concepts of business analysis, including requirement gathering, workflow mapping, and process optimization.
      
      The course emphasizes real-world applications by analyzing case-based scenarios and identifying efficient solutions. It also provides insights into improving system performance and supporting data-driven decision-making in business environments.`,
      highlights: [
        "Requirement Gathering & Analysis",
        "Workflow Mapping & Process Design",
        "Business Process Optimization",
        "Data-Driven Decision Making",
        "Real-world Case Study Analysis",
        "Process IMprovement Strategies",
      ],
    },
    {
      id: 2,
      title: "CSS (Basic) Certificate",
      description:
        "Covers fundamental concepts of CSS for designing and styling responsive web interfaces.",
      image: "CERTIFICATES/CSS (Basic) Certificate.png",
      category: "HackerRank",
      tech: ["CSS3","Flexbox","Responsive Design","Web Styling","Layout Design"],
      githubLink: "https://www.hackerrank.com/certificates/20e242410440",
      longDescription:  `This certification validates foundational knowledge of Cascading Style Sheets (CSS), focusing on styling, layout design, and visual presentation of web pages. It includes key concepts such as selectors, properties, cascading, and inheritance.

The course also covers layout techniques like Flexbox and box model understanding, along with text styling and element positioning. It helps in building responsive and visually appealing user interfaces with clean and structured design practices.`,
      highlights: [
    "CSS Selectors & Properties",
    "Box Model & Layout Design",
    "Flexbox & Responsive Design",
    "Text Styling & Fonts",
    "Positioning & Alignment",
    "Cascading & Inheritance",
      ],
    },
    {
      id: 3,
      title: "Get Started with Figma",
      description:
        "Introduces the fundamentals of UI/UX design using Figma for creating modern and interactive interfaces.",
      image: "CERTIFICATES/Get Started with Figma_page-0001.png",
      category: "Coursera",
      tech: ["Figma","UI/UX Design","Wireframing","Prototyping","Interface Design"],
      githubLink: "https://www.coursera.org/account/accomplishments/verify/7XLHUACVW342",
      longDescription:  `This project-based certification provides a hands-on introduction to UI/UX design using Figma. It covers essential design concepts such as layout structuring, component usage, and visual hierarchy to create user-friendly interfaces.

The course focuses on building interactive prototypes, designing clean and modern UI screens, and understanding the basics of user experience. It helps in developing practical skills for designing web and mobile interfaces with a focus on usability and aesthetics.`,
      highlights: [
    "UI Design Fundamentals","Wireframing & Layout Design","Prototyping in Figma","Components & Reusable Design","Visual Hierarchy & Spacing","Interactive Design Basics",
      ],
    },
    {
      id: 4,
      title: "Digital Skills: User Experience",
      description:
        "Introduces the fundamentals of user experience (UX) design and its impact on digital products.",
      image: "CERTIFICATES/digital-skills-user-experience_certificate_of_achievement_dm99hxn_page-0002.png",
      category: "Accenture",
      tech: ["User Experience (UX)","UI/UX Design","Interaction Design","Usability Principles", "User Research Basics"],
      githubLink: "https://www.futurelearn.com/certificates/dm99hxn",
      longDescription:  `This certification provides a foundational understanding of user experience (UX) and its importance in designing effective digital products. It covers key UX principles such as user-centered design, usability, and interaction design.

The course explores how to analyze user needs, improve digital experiences, and design intuitive interfaces. It emphasizes the role of UX in enhancing user satisfaction and creating meaningful interactions in modern applications.`,
      highlights: [
    "User Experience Fundamentals","User-Centered Design","Usability & Interaction Design","Understanding User Needs","Improving Digital Experiences","UX Design Principles",
      ],
    },
    {
      id: 5,
      title: "Data Analytics Virtual Job Simulation",
      description:
        "Hands-on simulation focused on real-world data analysis and business problem-solving.",
      image: "CERTIFICATES/Data Analytics Job Simulation_page-0001.png",
      category: "Deloitte (via Forage)",
      tech: ["Data Analysis","Data Interpretation","Problem Solving","Business Analytics","Analytical Thinking"],
      githubLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_acaTA86NeQfzauSYQ_1751466601792_completion_certificate.pdf",
      longDescription:  `This job simulation provides practical experience in data analytics by working on real-world business scenarios. It focuses on analyzing datasets, identifying patterns, and generating insights to support decision-making.

The program also covers aspects of forensic technology and data interpretation, helping to understand how data is used to solve business problems. It enhances analytical thinking, problem-solving skills, and the ability to communicate data-driven insights effectively.`,
      highlights: [
    "Real-world Data Analysis Tasks","Business Problem Solving","Data Interpretation & Insights","Forensic Technology Basics","Analytical Thinking Development","Decision Support Techniques",
      ],
    },
    {
      id: 6,
      title: "Create a Lead Generation Messenger Chatbot using Chatfuel",
      description:
        "Builds a chatbot for lead generation and automated user interaction using Chatfuel.",
      image: "CERTIFICATES/Create a Lead Generation Messenger Chatbot using Chatfuel_page-0001.png",
      category: "Coursera",
      tech: ["Chatfuel","Chatbot Development","Lead Generation","Conversation Design","Automation"],
      githubLink: "https://www.coursera.org/account/accomplishments/verify/Y2GVM8F2P4S4",
      longDescription:  `This project-based certification focuses on building a Messenger chatbot for lead generation using Chatfuel. It covers the fundamentals of chatbot development, including conversation flow design, user interaction, and automation.

The course emphasizes creating interactive chatbot experiences to capture user data, qualify leads, and improve customer engagement. It also provides hands-on experience in designing conversational interfaces and automating responses for business use cases.`,
      highlights: [
    "Chatbot Development Basics","Lead Generation Automation","Conversation Flow Design","User Interaction Handling","Automated Responses","Messenger Bot Integration",
      ],
    },
    {
      id: 7,
      title: "Figma Design Basics and Features",
      description:
        "Covers the basics of Figma for designing modern UI and creating interactive prototypes.",
      image: "CERTIFICATES/Gemini_Generated_Image_ynods4ynods4ynod.png",
      category: "Alison",
      tech: ["Figma","UI Design","Prototyping","Wireframing","Interface Design"],
      githubLink: "https://alison.com/certification/check/bbaa836d4f",
      longDescription:  `This certification introduces the fundamentals of UI design using Figma, focusing on creating visually appealing and user-friendly interfaces. It covers essential features such as layout design, components, and design tools used to build modern digital interfaces.

The course also explores prototyping, collaboration features, and efficient design workflows. It helps in developing practical skills for designing responsive UI layouts and improving overall user experience.`,
      highlights: [
    "Figma Interface & Tools","UI Design Fundamentals","Layout & Component Design","Prototyping Basics","Design Workflow & Collaboration","Responsive UI Design",
      ],
    },
    
    {
      id: 8,
      title: "Technology Job Simulation",
      description:
        "Hands-on simulation focused on solving real-world technology and system-based challenges.",
      image: "CERTIFICATES/technology job simulation_page-0001.png",
      category: "Deloitte (via Forage)",
      tech: ["Problem Solving","System Analysis","Technical Thinking","Business Technology","Solution Design"],
      githubLink: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_acaTA86NeQfzauSYQ_1767003539457_completion_certificate.pdf",
      longDescription:  `This job simulation provides practical exposure to real-world technology tasks in a business environment. It focuses on problem-solving, system analysis, and understanding how technology supports business operations.

The program includes working on technical scenarios, identifying issues, and proposing effective solutions. It helps in developing logical thinking, technical understanding, and the ability to approach complex problems in a structured manner.`,
      highlights: [
    "Real-world Technology Tasks","System Analysis & Problem Solving","Technical Scenario Handling","Logical Thinking Development","Solution Design Approach","Business Technology Understanding",
      ],
    },
    
  ];

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Function to open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (isModalOpen && e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Certified <span className="text-primary"> & Skilled</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="text-darkText-secondary mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover the certifications that validate my technical expertise
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-dark-lightest text-darkText-secondary hover:bg-dark-lighter"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="px-3 py-1 bg-primary bg-opacity-90 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-darkText-primary">
                  {project.title}
                </h3>
                <p className="text-darkText-secondary text-sm mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darkText-secondary hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View Details <FiCode className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-dark-lightest border border-dark-lightest rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto shadow-dark-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-dark-lightest text-darkText-primary p-2 rounded-full shadow-dark-md hover:bg-dark-lighter transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              {/* Modal Content */}
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-darkText-primary mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex space-x-4 mt-2 sm:mt-0">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-lightest text-darkText-primary rounded-md text-sm hover:bg-dark-lighter transition-colors"
                    >
                      <FiLink /> Link
                    </a>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Description
                  </h4>
                  <p className="text-darkText-secondary whitespace-pre-line">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-darkText-secondary space-y-1">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-lightest text-darkText-secondary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

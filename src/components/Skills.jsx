import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaFlask,
  FaRobot,
  FaChartBar,
  FaJsSquare,
  FaJsfiddle,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiC,
  SiSqlite,
  SiFlutter,
  SiStreamlit,
  SiSourceforge,
  SiArduino,
  SiPostman,
  SiTableau,
  SiFigma,
  Si99Designs,
  SiTmobile,
  SiWeb3Dotjs,
  SiWebassembly,
  SiPenny,
  SiDragonframe,
  SiCounterstrike,
  SiBookstack,
  SiExcalidraw,
  SiTypescript,
  SiDart,
  SiNextdotjs,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiDatabricks,
  SiStackedit,
  SiPandas,
  SiMlb,
  SiDeepgram,
  SiNeutralinojs,
  SiThesoundsresource,
  SiPytorch,
  SiReactiveresume,
  SiApifox,
  SiUikit,
  SiAwslambda,
  SiAmazonlumberyard,
  SiGooglecloud,
  SiDocker,
  SiRefinedgithub,
  SiOctopusdeploy,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVscodium,
  SiEclipseadoptium,
  SiJupyter,
  SiAdobe,
  SiWire,
  SiProtodotio,
  SiSuperuser,
  SiInteractjs,
  SiRetroarch,
  SiHomeassistantcommunitystore,
  SiCommonworkflowlanguage,
  SiTeamcity,
  SiLeaderprice,
  SiHiltonhotelsandresorts,
  SiTimescale,
  SiAuthentik,
} from "react-icons/si";
import { BiSolidBarChartAlt2, BiSolidCalendarHeart } from "react-icons/bi";
import { RiAiGenerate2, RiShieldCrossLine } from "react-icons/ri";
import { BsClipboard2DataFill, BsGearWideConnected, BsSignMergeLeft } from "react-icons/bs";
import { LuBrainCircuit, LuDatabase, LuSignature } from "react-icons/lu";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  // Skill data
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC />, level: 60 },
        { name: "C++", icon: <SiCplusplus />, level: 20 },
        { name: "Python", icon: <FaPython />, level: 40 },
        { name: "Java", icon: <SiCplusplus />, level: 80 },
        { name: "JavaScript", icon: <FaJs />, level: 65 },
        { name: "TypeScript", icon: <SiTypescript />, level: 20 },
        { name: "Dart", icon: <SiDart />, level: 20 },
      ],
    },
    {
      title: "Web Development - ",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "JavaScript(ES6+)", icon: <FaJsfiddle />, level: 65 },
        { name: "TypeScript", icon: <SiTypescript />, level: 20 },
        { name: "React", icon: <FaReact />, level: 20 },
        { name: "Angular", icon: <FaAngular />, level: 20 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 20 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 10 },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 10 },
      ],
    },
    {
      title: "Web Development - Backend",
      skills:[
        { name: "Node.js", icon: <SiNodedotjs/>, level: 45 },
        { name: "Express.js", icon: <SiExpress/>, level: 35 },
        { name: "Django", icon: <SiDjango/>, level: 25 },
        { name: "Flask", icon: <SiFlask/>, level: 35 },
        { name: "Spring Boot", icon: <SiSpringboot/>, level: 25 },
      ]
    },
    {
      title: "Web Development - Backend",
      skills:[
        { name: "MySQL", icon: <SiMysql/>, level: 70 },
        { name: "PostgreSQL", icon: <SiPostgresql/>, level: 25 },
        { name: "SQLite", icon: <SiSqlite/>, level: 35 },
        { name: "MongoDB", icon: <SiMongodb />, level: 65 },
        { name: "Oracle DB", icon: <SiOracle />, level: 20 },
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Data Analysis", icon: <BsClipboard2DataFill />, level: 80 },
        { name: "Data Cleaning", icon: <LuDatabase />, level: 90 },
        { name: "Data Visualization", icon: <SiDatabricks />, level: 80 },
        { name: "Internet of Things",icon: <SiArduino />,level: 30, },
        { name: "Pandas / NumPy", icon: <SiPandas />, level: 35 },
        { name: "Power BI", icon: <BiSolidBarChartAlt2 />, level: 80 },
        { name: "Tableau", icon: <SiTableau />, level: 80 },
        { name: "Excel (Advanced)", icon: <SiExcalidraw />, level: 90 },
      ],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        { name: "Machine Learning Algorithms", icon: <SiMlb />, level: 20 },
        { name: "Deep Learning", icon: <SiDeepgram />, level: 25 },
        { name: "Neural Networks (ANN, CNN, RNN)", icon: <SiNeutralinojs />, level: 45 },
        { name: "NLP (Natural Language Processing)", icon: <LuSignature />, level: 35 },
        { name: "TensorFlow", icon: <SiThesoundsresource />, level: 45 },
      ]
    },
    {
      title: "Mobile App Development",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: 30 },
        { name: "React Native", icon: <SiReactiveresume />, level: 20 },
        { name: "API Integration", icon: <SiApifox />, level: 20 },
        { name: "App UI Design", icon: <SiUikit />, level: 20 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", icon: <SiAwslambda />, level: 40 },
        { name: "Microsoft Azure", icon: <SiAmazonlumberyard />, level: 20 },
        { name: "Google Cloud", icon: <SiGooglecloud />, level: 70 },
        { name: "Docker", icon: <SiDocker />, level: 10 },
        { name: "GitHub Actions", icon: <SiRefinedgithub />, level: 70 },
        { name: "Deployment (Netlify, Vercel, Heroku)", icon: <SiOctopusdeploy />, level: 80 },
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: <SiGit />, level: 70 },
        { name: "GitHub", icon: <SiGithub />, level: 90 },
        { name: "GitLab", icon: <SiGitlab />, level: 60 },
        { name: "VS Code", icon: <SiVscodium />, level: 90 },
        { name: "Eclipse", icon: <SiEclipseadoptium />, level: 60 },
        { name: "Postman", icon: <SiPostman />, level: 20 },
        { name: "Jupyter Notebook", icon: <SiJupyter />, level: 10 },
      ]
    },
    {
      title: "UI / UX Design",
      skills: [
        { name: "Figma", icon: <SiFigma />, level: 80 },
        { name: "Adobe XD", icon: <SiAdobe />, level: 70 },
        { name: "Wireframing", icon: <SiWire />, level: 90 },
        { name: "Prototyping", icon: <SiProtodotio />, level: 50 },
        { name: "User Research", icon: <SiSuperuser />, level: 30 },
        { name: "Interaction Design", icon: <SiInteractjs />, level: 80 },
        { name: "Design Systems", icon: <Si99Designs />, level: 50 },
        
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <SiRetroarch />, level: 60 },
        { name: "Communication", icon: <SiCommonworkflowlanguage />, level: 70 },
        { name: "Teamwork", icon: <SiTeamcity />, level: 50 },
        { name: "Leadership", icon: <SiHiltonhotelsandresorts />, level: 60 },
        { name: "Time Management", icon: <SiTimescale />, level: 80 },
        { name: "Critical Thinking", icon: <SiAuthentik />, level: 50 },
        { name: "Adaptability", icon: <BsGearWideConnected />, level: 70 },
      ]
    },
  ];
  
  const tools_and_tech = [
    "DBMS",
    "Operating Systems",
    "Responisive Web Design",
    "Computer Networks",
    "Network Security Basics",
    "CI/CD Basics",
    "Data Cleaning",
    "Feature Engineering",
    "Model Evaluation",
    "Debugging",
    "PHP",
    "Web Animations",
    "Authentication (JWT, OAuth)",
  ];
  
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 bg-dark">
        {/* Section Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Skills</span>
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
            I've accumulated experience in various technologies and frameworks
            across the stack. Here are the skills I've been focussing on
            recently.
          </motion.p>
        </div>

        {/* Skills Container */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(124, 77, 255, 0.2)",
              }}
            >
              {/* Add subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-xl" />

              <h3 className="text-xl font-bold mb-5 text-darkText-primary relative z-10">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-primary text-xl mr-2">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-darkText-primary">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-darkText-secondary">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-dark rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                        }}
                      >
                        {/* Glow effect for progress bar */}
                        <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-sm"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tools tags */}
        <motion.div
          className="mt-12 relative bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md px-6 py-8 flex flex-col items-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-xl pointer-events-none" />
          <h3 className="text-xl font-semibold mb-6 text-center text-darkText-primary relative z-10">
            Other Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {tools_and_tech.map((tool, index) => (
              <motion.span
                key={index}
                className="bg-primary bg-opacity-10 text-primary px-4 py-1 rounded-full text-sm font-medium border border-primary border-opacity-20"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  boxShadow: "0 4px 10px rgba(124, 77, 255, 0.2)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

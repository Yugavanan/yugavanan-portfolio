import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const highlights = [
    {
      icon: <FiCode />,
      title: "Polyglot Programming",
      description:
        "Proficient in multiple programming languages, adapting to the best tool for each task.",
    },
    {
      icon: <FiCode />,
      title: "Creative Coding",
      description:
        "Transforming ideas into functional code with creativity and precision.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter relative overflow-hidden">
      
      {/* BG elements */}
      <div className="absolute right-0 top-20 w-64 h-64 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-dark-lightest rounded-full -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">

        {/* Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Column */}
          <motion.div
            className="flex justify-center md:justify-end order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-xl opacity-20 blur-xl"
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image */}
              <div className="w-full max-w-md relative z-10">
                <img
                  src="/photos/profile.jpg"  // <-- FIXED FOR VITE
                  alt="Professional portrait"
                  className="rounded-xl shadow-dark-md relative z-20 border-2 border-dark-lightest"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-dark-lighter rounded-lg shadow-dark-md -z-0 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-medium text-primary mb-3">
              Get to know me
            </motion.h3>

            <motion.h4
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6 text-darkText-primary"
            >
              Passionate{" "}
              <span className="gradient-text">Data Analytics & Web Designer</span>
            </motion.h4>

            <motion.p variants={itemVariants} className="text-darkText-secondary mb-6">
              Hey there! I’m a curious and creative developer who loves bringing ideas to life — 
              whether through clean code, smart design, or just experimenting with something new.
            </motion.p>

            <motion.p variants={itemVariants} className="text-darkText-secondary mb-8">
              My journey into tech started with exploring Python and gradually diving into modern 
              technologies. I love creating visually appealing and functional digital experiences.
            </motion.p>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

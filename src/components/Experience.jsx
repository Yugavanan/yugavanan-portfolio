import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    position: "CSS (Basic) Certificate",
    organization: "HackerRank",
    start_date: "29 March 2025",
    end_date: "31 March 2025",
    certificate_link:
      "https://www.hackerrank.com/certificates/20e242410440",
    highlights: [
      "🏅 Secured a verified certification by successfully clearing HackerRank’s CSS skill assessment, recognized by global tech recruiters.",
      "🎯 Demonstrated strong knowledge in Cascading, Inheritance, Box Model, and responsive layout structuring.",
      "🎨 Gained hands-on expertise in text styling, visual formatting, and design consistency using modern CSS practices.",
      "🚀 Strengthened frontend development foundation — enabling clean, scalable, and visually appealing UI designs.",
      "🌐 Applied CSS skills in real-world projects to create interactive, accessible, and mobile-friendly user interfaces.",
    ],
    tools: ["CSS", " Web Design", "Frontend Development", "Responsive Layouts", "Visual Styling",],
  },
  {
    id: 2,
    position: "Digital Skills: User Experience",
    organization: " Accenture",
    start_date: "10 March 2025",
    end_date: "18 June, 2025",
    certificate_link:
      "https://www.futurelearn.com/certificates/dm99hxn",
    highlights: [
      "🌟 Completed an industry-recognized course focused on building strong UX design skills for digital products. ",
      "💡 Gained a deep understanding of user-centered design, the UX design process, and usability principles.",
      "🔍 Learned to conduct effective user research, develop personas, and apply wireframes and prototypes.",
      "🎯 Applied UX strategies to enhance real-world product usability, accessibility, and customer satisfaction.",
      "📊 Achieved an 88% performance score, demonstrating strong grasp over modern UX fundamentals.",
    ],
    tools: [
      "UX Design",
      "Usability",
      "Wireframing",
      "Prototyping",
      "User Research",
      "UI/UX Principles",
    ],
  },
  {
    id: 3,
    position: "Data Analytics Virtual Job Simulation",
    organization: " Deloitte (via Forage)",
    end_date: " 2 July, 2025",
    certificate_link:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_acaTA86NeQfzauSYQ_1751466601792_completion_certificate.pdf",
    highlights: [
      "📊 Successfully completed Deloitte’s virtual job simulation, gaining real-world experience in data analysis and forensic technology.",
      "🕵️‍♂️ Worked on tasks mimicking real Deloitte projects, including data cleaning, data interpretation, and applying investigative techniques to solve business challenges.",
      "📈 Demonstrated ability to handle large datasets, identify key trends, and generate insights aligned with audit and consulting standards.",
      "🔐 Developed an understanding of forensic data workflows, ensuring integrity, traceability, and data-driven decision-making.",
      "🧠 Sharpened analytical reasoning and critical thinking under practical, time-bound business scenarios.",
    ],
    tools: ["Data Analysis","Forensic Technology","Excel","Critical Thinking","Business Insight","Investigative Reporting"],
  },
  {
    id: 4,
    position: "Figma Design Basics and Features",
    organization: " Alison",
    end_date: " 16 June, 2025",
    certificate_link:
      "https://alison.com/certification/check/bbaa836d4f",
    highlights: [
      "🎨 Completed a comprehensive course on Figma design fundamentals, achieving a 92% score in the final assessment.",

"🧠 Gained practical knowledge on creating vector graphics, prototyping, and UI components using Figma.",

"🛠️ Explored Figma’s features such as frames, layers, components, and design systems for effective UI/UX collaboration.",

"⏱️ Completed over 2 hours of guided training, mastering essential tools and layout techniques for modern digital design.",

"🚀 Equipped to translate visual ideas into interactive digital products using a cloud-based design workflow.",
    ],
    tools: ["Figma","UI Design","Prototyping","Visual Hierarchy","Layouts","Design Systems"],
  },
];

const ExperienceCard = ({ exp }) => (
  <motion.div
    className="bg-dark-lightest border-primary/30 rounded-xl p-6 md:p-8 shadow-dark-md relative max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
          {exp.position}
        </h3>
        <div className="text-primary font-semibold mb-1">
          {exp.organization}
        </div>
        <div className="text-darkText-secondary text-sm mb-1">
          {exp.location}
        </div>{" "}
      </div>
      <div className="md:absolute md:top-6 md:right-8 flex-shrink-0">
        <span className="bg-dark px-4 py-1 rounded-full text-darkText-secondary text-xs border border-primary/30">
          {exp.start_date}
          {exp.start_date && exp.end_date
            ? ` - ${exp.end_date}`
            : exp.end_date
            ? exp.end_date
            : ""}
        </span>
      </div>
    </div>
    <ul className="list-disc list-inside text-darkText-secondary space-y-2 mt-4 mb-6">
      {exp.highlights.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="mb-4 flex flex-wrap gap-4 justify-center">
      {exp.tools.map((tool, ind) => (
        <span
          key={ind}
          className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md border border-primary border-opacity-20 rounded"
        >
          {tool}
        </span>
      ))}
    </div>
    <div className="flex justify-end">
      <a
        href={exp.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-accent text-white px-5 py-2 rounded font-medium transition-colors text-sm"
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="py-20 bg-dark relative overflow-hidden"
      id="experiences"
    >
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-title mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Professional <span className="text-primary">Experiences</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        <div ref={ref} className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

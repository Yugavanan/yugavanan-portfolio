import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiPaperclip } from "react-icons/fi";

const Papers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Papers data
  const papers = [
    {
      id: 1,
      title: "Deepvisioclassifier: Multimodal Image Classification Technique",
      description: `This research focuses on image classification using deep learning techniques. An AlexNet-based Convolutional Neural Network (CNN) was applied on ImageNet datasets for experimental analysis. By training on cropped image sections, the system demonstrated the effectiveness of AlexNet in achieving reliable and accurate image classification results`,
      image: "/paper_photos/1721554288679.jpeg",
      highlights: [
        "Deep Learning Approach: Implemented AlexNet architecture with CNN.",
        "Dataset Used: Experiments conducted on ImageNet with cropped test images.",
        "Proven Results: Demonstrated strong accuracy and effectiveness in image classification."
],
      pdfLink: "https://ijream.org/papers/IJREAMV09I05101104.pdf",
    },
    {
      id: 2,
      title: "DNA Sequencing Using Machine Learning Algorithm",
      description: `This work applies machine learning methods to DNA sequencing, improving accuracy and enabling faster identification of genetic variations. The study highlights how ML supports genomics, personalized medicine, and large-scale data analysis.`,
      image: "/paper_photos/1721845548188.jpeg",
      highlights: [
          "Machine Learning Integration: Applied ML methods to enhance DNA sequencing analysis.",
          "Improved Outcomes: Boosts sequencing accuracy and enables biomarker identification.",
          "Broader Applications: Supports genomics, personalized medicine, and metagenomic studies."      
],
       pdfLink: "https://ijrpr.com/uploads/V5ISSUE5/IJRPR28882.pdf",
    },
    {
     id: 3,
     title: "Deal Sphere",
     description: `DealSphere is a full-stack digital marketplace platform designed for buying, selling, and redeeming digital coupons and vouchers. It leverages the MERN stack—MongoDB, Express.js, React.js, and Node.js—to deliver a secure, scalable, and seamless trading experience.`,
     image: "/paper_photos/certificates_183750233857(STATIC WEBSITE HOSTING)_page-0001.jpg",
     highlights: [
     "DealSphere is a secure and scalable digital marketplace designed for buying, selling, and redeeming coupons with transparency and efficiency.",
     "The platform enforces role-based authentication, ensuring clear boundaries between users, sellers, and administrators.",
     " Its modular architecture and clean API design make it adaptable for future extensions like payment gateways and notifications."      
   ],
     pdfLink: "https://ijsci.com/index.php/home/article/view/899/IJSCI02112025055",
   },
    {
      id: 4,
      title: "Artisium",
      description: `Artisium is an interactive online platform designed to enhance the way users experience visual art. It offers virtual access to curated collections, detailed artist profiles, and high-resolution artwork exploration. By integrating accessibility and engagement features, the platform bridges the gap between artists, collectors, and enthusiasts, while also enabling direct art sales.`,
      image: "/paper_photos/IRJMETS61200013299-4(ARTISIUM)_page-0001.jpg",
      highlights: [
        "Immersive Experience: High-resolution zoom and interactive gallery-like environment.",
        "Artist-Centric: Provides detailed biographies and background of creators.",
        "Community Support: Facilitates direct art sales, connecting buyers and artists."
      ],
      pdfLink: "https://www.irjmets.com/paperdetail.php?paperId=ef83dbe4962d0e14e140b650b2064e01",
    },
    {
      id: 5,
      title: "Static Website Hosting Using AWS",
      description: `This project demonstrates static website hosting on Amazon Web Services (AWS) using Amazon S3, CloudFront, Route 53, and IAM. The solution enables secure, scalable, and globally accessible web hosting with low latency and minimal maintenance, serving as a practical foundation for portfolios, blogs, and business websites.`,
      image: "/paper_photos/certificates_183750233857(STATIC WEBSITE HOSTING)_page-0001.jpg",
      highlights: [
      "AWS S3 Hosting: Stores and delivers static files (HTML, CSS, JS, images).",
      "Optimized Performance: Integrated CloudFront CDN for faster global content delivery.",
      "Scalability & Security: Custom domain via Route 53 with IAM-based access control."      
    ],
      pdfLink: "https://ijsci.com/index.php/home/article/view/134",
    },

  ];

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

  return (
    <section id="papers" className="py-20 bg-dark relative overflow-hidden">
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
            Paper <span className="text-primary">Publications</span>
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
            A dive into my academic papers publications and research
            contributions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              className="bg-dark-lightest border border-primary/30 rounded-xl p-6 md:p-8 shadow-dark-md flex flex-col md:flex-row items-stretch max-w-3xl mx-auto relative"
            >
              {/* Left: Paper Image */}
              <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0 md:mr-8">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="rounded-md object-cover w-full max-w-xs h-auto border border-dark"
                />
              </div>
              {/* Right: Paper Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-darkText-secondary text-base mb-4 whitespace-pre-line">
                    {paper.description}
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Key Highlights:
                  </h4>
                  <ul className="list-disc list-inside text-darkText-secondary space-y-1 mb-6">
                    {paper.highlights.map((highlight, index) => (
                      <li key={index} className="text-base">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href={paper.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-accent text-white px-5 py-2 rounded font-medium transition-colors text-sm"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Papers;

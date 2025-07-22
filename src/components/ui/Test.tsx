import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  const educationData = [
    {
      school: "Silliman University",
      degree: "Bachelor of Science in Computer Science",
      duration: "August 2021 – August 2024",
      graduation: "Graduated May 2025",
      gpa: "3.8/4.0",
      location: "Dumaguete City, Philippines",
      courses: [
        "C++",
        "Object Oriented Programming",
        "Software Development I & II",
        "Embedded Systems",
        "Data Structures and Algorithms",
        "SQL",
        "Database Design",
        "Relational Database Management",
      ],
    },
    {
      school: "Liceo del Verbo Divino - SHS",
      degree: "Senior High School - ICT Track",
      duration: "June 2019 – June 2021",
      graduation: "Graduated",
      gpa: "With Honors",
      location: "Dumaguete City, Philippines",
      courses: ["Computer Systems Servicing", "Programming", "Capstone"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const courseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="education"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent opacity-30"></div>

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-[#0f172a] shadow-lg shadow-cyan-400/50"></div>

              <div className="ml-16 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-400/30">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-8 border-b border-white/10">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div className="flex-1">
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {edu.school}
                      </motion.h3>
                      <p className="text-xl text-cyan-200 mb-3 font-medium">
                        {edu.degree}
                      </p>

                      {/* Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-cyan-500/20 rounded-lg">
                            <svg
                              className="w-5 h-5 text-cyan-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm font-medium">
                              Duration
                            </p>
                            <p className="text-white">{edu.duration}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500/20 rounded-lg">
                            <svg
                              className="w-5 h-5 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm font-medium">
                              Status
                            </p>
                            <p className="text-green-400 font-semibold">
                              {edu.graduation}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-500/20 rounded-lg">
                            <svg
                              className="w-5 h-5 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm font-medium">
                              Achievement
                            </p>
                            <p className="text-purple-400 font-semibold">
                              {edu.gpa}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-500/20 rounded-lg">
                            <svg
                              className="w-5 h-5 text-orange-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm font-medium">
                              Location
                            </p>
                            <p className="text-orange-400">{edu.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg self-start lg:self-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {idx === 0 ? "🎓 University" : "🏫 High School"}
                    </motion.div>
                  </div>
                </div>

                {/* Courses Section */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Key Courses
                    </h4>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {edu.courses.map((course, i) => (
                      <motion.div
                        key={i}
                        variants={courseVariants}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/course relative bg-gradient-to-r from-[#1e293b] to-[#334155] hover:from-cyan-600/20 hover:to-blue-600/20 text-white px-5 py-3 text-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover/course:from-cyan-400/10 group-hover/course:to-blue-400/10 rounded-2xl transition-all duration-300"></div>
                        <div className="relative flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                          <span className="font-medium">{course}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

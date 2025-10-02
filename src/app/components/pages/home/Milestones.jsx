"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaHospital,
  FaPills,
  FaLaptop,
  FaNetworkWired,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

const Milestones = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: "2008",
      title: "Foundation of SafeCare Holding",
      description:
        "Established with a vision to transform the healthcare landscape in the UAE and beyond, starting with medical equipment distribution.",
      icon: <FaRocket className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2012",
      title: "Pharmaceutical Division Launch",
      description:
        "Expanded into pharmaceutical manufacturing and distribution with our Jurhy brand, focusing on high-quality generic medications.",
      icon: <FaPills className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2015",
      title: "Technology Integration",
      description:
        "Launched SafeCare Technology division, bringing digital health solutions and management systems to healthcare providers.",
      icon: <FaLaptop className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2018",
      title: "Multi-Brand Portfolio",
      description:
        "Reached 6 specialized healthcare brands under the SafeCare umbrella, creating a comprehensive healthcare ecosystem.",
      icon: <FaHospital className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2020",
      title: "Healthcare Infrastructure Excellence",
      description:
        "Expanded into hospital infrastructure and facility management, supporting healthcare institutions during critical times.",
      icon: <FaNetworkWired className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2023",
      title: "Digital Health Leadership",
      description:
        "Became a leading provider of integrated digital health platforms, serving over 50 healthcare partners across the region.",
      icon: <FaAward className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
    {
      year: "2024",
      title: "Global Supply Chain",
      description:
        "Established comprehensive global supply chain operations, ensuring reliable healthcare product delivery worldwide.",
      icon: <FaGlobe className="text-2xl" />,
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-8 to-gray-9 overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/bg-mile.png')",
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/80 to-primary/5 backdrop-blur-[4px] "></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16 lg:mb-20">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Our Journey
            </span>
          </motion.div>

          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-5xl leading-snug text-dark-2 mb-6">
            Our Journey of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Excellence
            </span>
          </h2>

          <motion.div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8 shadow-lg" />
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 items-center">
            {/* Horizontal Timeline Line */}
            <div className="relative w-full flex justify-center">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/20 via-accent/50 to-primary/20 rounded-full shadow-inner"></div>

              {/* Milestone Years (spaced evenly) */}
              <div className="flex justify-between w-full relative z-10 px-6 lg:px-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    onMouseEnter={() => setActiveMilestone(index)}
                    onClick={() => setActiveMilestone(index)}
                  >
                    {/* Year Circle */}
                    <div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 border-2 shadow-lg ${
                        activeMilestone === index
                          ? `bg-gradient-to-br ${milestone.gradient} scale-110 shadow-2xl text-white border-white`
                          : "bg-white text-dark-2 border-primary/30 group-hover:bg-primary/10 group-hover:border-primary group-hover:scale-105"
                      }`}
                    >
                      {milestone.year}
                    </div>

                    {/* Year Label */}
                    <div
                      className={`text-sm font-semibold transition-all duration-300 ${
                        activeMilestone === index
                          ? "text-primary scale-105 font-bold"
                          : "text-dark-3 group-hover:text-dark-2"
                      }`}
                    >
                      {milestone.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Milestone Content */}
            <div className="mt-16 lg:mt-20 w-full max-w-4xl">
              <motion.div
                key={activeMilestone}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-200/60"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${milestones[activeMilestone].gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 border border-white/20`}
                  >
                    {milestones[activeMilestone].icon}
                  </div>

                  <div className="text-center lg:text-left flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-2 mb-4 leading-tight">
                      {milestones[activeMilestone].title}
                    </h3>

                    <p className="text-lg text-dark-2/80 leading-relaxed">
                      {milestones[activeMilestone].description}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 shadow-sm"
                        style={{
                          width: `${
                            ((activeMilestone + 1) / milestones.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">
                      {activeMilestone + 1} of {milestones.length}
                    </span>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setActiveMilestone((prev) => Math.max(0, prev - 1))
                      }
                      disabled={activeMilestone === 0}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center gap-2 text-sm"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() =>
                        setActiveMilestone((prev) =>
                          Math.min(milestones.length - 1, prev + 1)
                        )
                      }
                      disabled={activeMilestone === milestones.length - 1}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center gap-2 text-sm"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

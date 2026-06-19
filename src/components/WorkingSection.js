"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { BookOpen, ListChecks, Download } from "lucide-react";

const WorkingSection = () => {
  const steps = [
    {
      icon: <BookOpen className="size-8" />,
      title: "Select Curriculum",
      description: "Pick your class and subject. Access our vast question bank for CBSE, NEET, JEE, and competitive exams.",
    },
    {
      icon: <ListChecks className="size-8" />,
      title: "Pick Questions",
      description: "Set your blueprint or use our preloaded templates to select questions for your exact requirements.",
    },
    {
      icon: <Download className="size-8" />,
      title: "Download & Go",
      description: "Preview your custom test, make final tweaks, and export your paper instantly as a professional PDF.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-24">
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">
            How It Works
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Create Online/Offline Tests in 3 Steps
          </h2>
          <p className="text-slate-600 md:text-lg max-w-lg">
            From single-topic quizzes to full-syllabus board exams.
          </p>
        </div>

        {/* Steps Grid with Timeline Line */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Step 0{i + 1}
              </div>

              <div className="mb-6 inline-flex items-center justify-center size-16 rounded-2xl bg-white text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
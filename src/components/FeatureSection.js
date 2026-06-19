"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import features from "@/data/feature.data";

const FeatureSection = ({ container, item }) => {
  return (
    <section id="features" className="w-full py-24 bg-slate-50/30">
      {/* Container limited to max-w-6xl for a balanced, centered look */}
      <div className="px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border-0"
            variant="secondary"
          >
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            What more can you ask for?
          </h2>
          <p className="max-w-[600px] text-slate-600 md:text-lg">
            It's not just a paper-making app, manage your students, create batches, and share resources effortlessly.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Icon container refined */}
                  <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

// Import the images relatively from the root folder
import app2 from "../../app_2.jpeg";
import app3 from "../../app_3.jpeg";
import app4 from "../../app_4.jpeg";

const Testimonials = [
  {
    role: "Look professional and stand out with your mobile app.",
    image: app3.src, 
  },
  {
    role: "All your students get their own dashboard & report.",
    image: app2.src,
  },
  {
    role: "Share tests, resources, manage batches and more!",
    image: app4.src,
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Massive Ambient Blue Gradient Blob behind ALL boxes */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1000px] h-[600px] bg-gradient-to-br from-blue-400 via-blue-600 to-cyan-400 opacity-20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">
            Free Mobile App with Every Subscription
          </Badge>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            The Personal{" "}
            <span className="underline decoration-blue-600 decoration-4 underline-offset-8">
              Mobile App Advantage
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {Testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[320px] h-[700px] group"
            >
              {/* Glowing Background */}
              <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-800 opacity-40 blur-2xl group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* Inner Card Container */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black z-10 shadow-2xl">
                {/* Removed group-hover:scale-105 and transition classes so it stays static */}
                <img 
                  src={t.image} 
                  alt="App Screenshot" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Darker Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-12 right-6 text-right max-w-[85%]">
                  {/* Kept quote in case you add it back later */}
                  {t.quote && (
                    <p className="text-white mb-6 font-light text-[26px] leading-[1.2] tracking-wide">
                      {t.quote}
                    </p>
                  )}
                  
                  <div className="text-white">
                    {t.author && <p className="font-bold text-lg">{t.author}</p>}
                    {t.role && <p className="text-blue-300 font-medium tracking-wide text-xl leading-snug">{t.role}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
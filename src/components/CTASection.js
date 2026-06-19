import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Animated UnderlineHighlight: Uses a dark blue color for the text and SVG
const UnderlineHighlight = ({ children, delay = 0.3 }) => (
  <span className="relative inline-block whitespace-nowrap px-1">
    <span className="relative z-10 text-blue-900 drop-shadow-sm">{children}</span>
    <svg
      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-blue-900 pointer-events-none"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.75 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        d="M 2 8 Q 50 2 98 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const CTASection = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-primary to-primary/80 dark:from-gray-100 dark:to-gray-500 text-primary-foreground relative overflow-hidden">
      
      {/* Masked Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
      
      {/* Volumetric Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          {/* Relaxed Typography with dual underlines */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight max-w-4xl drop-shadow-sm">
            Trusted by <UnderlineHighlight delay={0.4}>12,000+ Schools</UnderlineHighlight> & <br className="hidden sm:block" /> <UnderlineHighlight delay={0.7}>1,00,000+ Teachers</UnderlineHighlight>
          </h2>
          
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl font-medium leading-relaxed mt-2">
            Join thousands of satisfied customers who are saving hours every week and boosting their productivity by leveraging Examin8.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open("https://app.examin8.com/home", "_blank", "noopener,noreferrer")}
              className="rounded-full h-14 px-8 text-base font-semibold cursor-pointer group shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Get Started
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform ease-in-out duration-300 size-5" 
              />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.examin8.exam&referrer=utm_source%3Dexmin8_home_top%26utm_medium%3Dbutton%26utm_campaign%3Dexamin8_home", "_blank", "noopener,noreferrer")}
              className="rounded-full h-14 px-8 text-base font-semibold bg-transparent border-white/40 text-white hover:text-white hover:bg-white/10 hover:border-white cursor-pointer dark:text-neutral-700 dark:border-neutral-400 dark:hover:bg-neutral-200 transition-all duration-300 backdrop-blur-sm"
            >
               Install App
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
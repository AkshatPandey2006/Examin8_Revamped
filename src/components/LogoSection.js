import Image from "next/image";
import React from "react";

// Go up 3 levels to reach the root directory where the images are
import s1 from "../../s1.png";
import s2 from "../../s2.png";
import s3 from "../../s3.png";
import s4 from "../../s4.webp";
import s5 from "../../s5.png";

const LogoSection = () => {
  // Array of objects so we can attach a tooltip name to specific logos
  const logos = [
    { src: s1.src, name: "Kendriya Vidyalaya" },
    { src: s2.src, name: "Delhi Public School" }, 
    { src: s3.src, name: "Vidyashram School" }, 
    { src: s4.src, name: "Sainik School" }, 
    { src: s5.src, name: "St. Xavier High School" }
  ];

  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-base font-medium text-muted-foreground">
            Used by the Top Schools of India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-4">
            {logos.map((logo, i) => (
              <div key={i} className="group relative flex items-center justify-center">
                
                <Image
                  src={logo.src} 
                  alt={`${logo.name || 'School'} logo`}
                  width={160}
                  height={80}
                  className="w-[160px] h-[80px] object-contain opacity-70 transition-all hover:opacity-100 hover:grayscale-0"
                />

                {/* Sleek, minimal text animation directly below the logo */}
                {logo.name && (
                  <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 -translate-y-2 whitespace-nowrap text-sm font-medium text-slate-500 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    {logo.name}
                  </span>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
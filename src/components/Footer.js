import React from "react";
import Image from "next/image"; 
import { MapPin, Phone, MessageCircle, Mail, Download } from "lucide-react";

// Import the logo using a relative path tracing back to the root directory
import logoImg from "../../logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur-md">
      <div className="flex flex-col gap-6 px-6 py-8 md:px-12 max-w-7xl mx-auto text-sm text-muted-foreground">
        
        {/* Top Row: Brand, App Download & Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & App Download CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 font-semibold text-foreground tracking-tight">
              {/* Passed the imported logo object to the src */}
              <Image 
                src={logoImg} 
                alt="Examin8 Logo" 
                width={28} 
                height={28} 
                className="object-contain"
              />
              <span className="text-base">Examin8</span>
            </div>
            
            <span className="text-border/60 hidden md:block">|</span>
            
            {/* App Download CTA */}
            <button
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.examin8.exam&referrer=utm_source%3Dexmin8_home_top%26utm_medium%3Dbutton%26utm_campaign%3Dexamin8_home", "_blank", "noopener,noreferrer")}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary dark:hover:text-blue-400 font-medium transition-all cursor-pointer group"
            >
              <Download className="size-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download App</span>
            </button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="tel:+91-8047225309"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="size-4 shrink-0" />
              <span>Call Us</span>
            </a>
            
            <a
              href="https://api.whatsapp.com/send/?phone=919213522769&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-500 transition-colors"
            >
              <MessageCircle className="size-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
            
            <a
              href="mailto:care@mycbseguide.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="size-4 shrink-0" />
              <span>Mail</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/40"></div>

        {/* Bottom Row: Legal, Copyright, & Location */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span>&copy; {new Date().getFullYear()} Examin8. All rights reserved.</span>
            
            <span className="text-border/60 hidden md:block">|</span>
            
            <a
              href="https://elpistechsolutions.com/tos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="https://elpistechsolutions.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Location */}
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 shrink-0 text-primary/70" /> 
            Noida, Uttar Pradesh
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
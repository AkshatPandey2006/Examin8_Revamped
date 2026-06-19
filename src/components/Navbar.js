"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X, Menu, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; 

// Imported your logo (2 folders out)
import myLogo from "../../logo.png";

const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-10 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className=" flex h-16 items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2 font-bold">
            <Image 
              src={myLogo.src} 
              alt="Examin8 Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span>Examin8</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="https://app.examin8.com/purchase-subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Price
          </Link>
          <Link
            href="https://examin8.com/blog/test-generator-tutorial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tutorials
          </Link>
          <Link
            href="https://examin8.com/blog/category/tg-updates/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Updates
          </Link>
          <Link
            href="https://examin8.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Link 
            href="https://app.examin8.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full text-base group cursor-pointer py-5">
              Get Started
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-200" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme toggle removed from here */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-[#262626] border-b"
        >
          <div className="py-4 px-5 flex flex-col gap-4">
            <Link
              href="https://app.examin8.com/purchase-subscription"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Price
            </Link>
            <Link
              href="https://examin8.com/blog/test-generator-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="https://examin8.com/blog/category/tg-updates/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Updates
            </Link>
            <Link
              href="https://examin8.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link 
                href="https://app.examin8.com/home"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
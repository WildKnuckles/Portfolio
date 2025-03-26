"use client"
import React, { useState, useEffect } from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconBrandGoogle} from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";

const Hero = () => {
  // Add client-side only rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return a simple placeholder during SSR
  if (!isMounted) {
    return <div className="section min-h-screen"></div>;
  }

  return (
    <div className="section flex flex-col items-center">
      <div className="max-w-2xl mx-auto p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500 text-center font-sans font-bold">
          Jonatão Cardoso
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I am a passionate Frontend Developer with a keen eye for creating intuitive, high-performance, and visually striking user interfaces. With expertise in Next.js, React, and Tailwind CSS, I specialize in building seamless web applications that prioritize user experience and efficiency.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 mt-4">
        <Link href="https://www.linkedin.com/in/jonatão-cardoso-72853b358" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin/></Link>
        <Link href="https://www.github.com/WildKnuckles" target="_blank" rel="noopener noreferrer"><IconBrandGithub/></Link>
        <Link href="mailto:jonataosacapia@gmail.com"><IconBrandGoogle/></Link>
        <Link href="https://www.instagram.com/johnnycardoso_wk" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram />
        </Link>
      </motion.div>

      <motion.button
        className="border border-border text-foreground px-6 py-3 rounded-full flex justify-items-center shadow-lg hover:bg-primary-foreground mt-12 cursor-pointer"
        initial={{ y: 5 }}
        animate={{ y: -5 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
      >
        <IconArrowDown size={20} />
      </motion.button>
    </div>
  )
}

export default Hero

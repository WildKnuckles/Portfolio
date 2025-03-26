"use client"
import React, { useState, useEffect } from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconBrandGoogle} from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import avatar from '@/assets/avatar.jpg'

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
    <div className="flex flex-col items-center justify-center min-h-screen antialiased">
        <Avatar>
      <AvatarImage src={avatar.src} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <br />
      <Badge variant="outline">Welcome</Badge>
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
          I build stunning, dynamic and visually captivating digital interfaces, enriched with fluid animations and engaging interactions. I use modern and innovative technologies to develop intuitive experiences, always with a focus on UX, ensuring the creation of efficient, highly scalable and truly user-friendly applications.
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
        <Link href="#about">
        <IconArrowDown size={20} />
        </Link>
      </motion.button>
    </div>
  )
}

export default Hero

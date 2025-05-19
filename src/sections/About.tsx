'use client'

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Me from '@/assets/me.jpg'

const About = () => {
  return (
    <div className="section px-4 sm:px-6 lg:px-8 py-8" id="about">
      <div className="flex justify-center mb-4">
        <Badge variant="outline">Know Who I Am?</Badge>
      </div>

      <motion.p 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-muted-foreground max-w-lg mx-auto mb-6 text-sm text-center relative z-10 p-2 border-4 border-muted-foreground border-t-0 border-b-0 border-l-0 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:border-b-2 after:border-muted-foreground"
      >
        I am a passionate Frontend Developer with a keen eye for creating intuitive, high-performance, and visually striking user interfaces. With expertise in Next.js, React, and Tailwind CSS, I specialize in building seamless web applications that prioritize user experience and efficiency.
      </motion.p>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 mt-10">
        {/* Texto */}
        <div className="w-full md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl text-center md:text-start font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500"
          >
            Jonatão Cardoso
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground mt-4 max-w-lg mx-auto md:mx-0 text-md text-center md:text-start"
          >
            I am a passionate Frontend Developer with a keen eye for creating intuitive, high-performance, and visually striking user interfaces. With expertise in Next.js, React, and Tailwind CSS, I specialize in building seamless web applications that prioritize user experience and efficiency.
          </motion.p>
        </div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1.5 }}
          className="w-60 sm:w-72 md:w-[34rem] max-w-full relative"
        >
          <div className="w-full h-full overflow-hidden" style={{
            clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
          }}>
            <Image
              src={Me}
              alt="me"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

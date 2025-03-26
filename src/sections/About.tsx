import React from 'react'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Me from '@/assets/me.jpg'

const About = () => {
  return (
    <div className="section" id="about">
      <Badge variant="outline">Know Who I Am?</Badge>
      <motion.p 
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10 p-2 border-4 border-muted-foreground border-t-0 border-b-0 border-l-0 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:border-b-3 after:border-muted-foreground">
  I am a passionate Frontend Developer with a keen eye for creating intuitive, high-performance, and visually striking user interfaces. With expertise in Next.js, React, and Tailwind CSS, I specialize in building seamless web applications that prioritize user experience and efficiency.
</motion.p>


        <div className="flex flex-col md:flex-row justify-center items-center gap-24 mt-8">
            {/* Imagem */}
        <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 0.8 }}
      className="flex p-4 justify-center"
      style={{
        clipPath:
          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
      }}
    >
      <Image
        src={Me}
        alt="me"
        className="w-full max-w-[40rem] h-auto sm:w-[30rem] md:w-[35rem] lg:w-[38rem]"
      />
    </motion.div>


            <div className='w-full md:w-1/2'>
                 <motion.h1 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500 text-center md:text-start font-sans font-bold">
                  Jonatão Cardoso
                </motion.h1>
                <motion.p 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-muted-foreground max-w-lg mx-auto my-2 text-md text-center md:text-start relative z-10">
                I am a passionate Frontend Developer with a keen eye for creating intuitive, high-performance, and visually striking user interfaces. With expertise in Next.js, React, and Tailwind CSS, I specialize in building seamless web applications that prioritize user experience and efficiency.
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default About

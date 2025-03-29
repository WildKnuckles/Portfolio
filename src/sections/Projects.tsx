import React from 'react'
import ParticlesComponent from '@/components/ui/particles'; 
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion';
import { ThreeDCardDemo } from '@/components/cards';

const Projects = () => {
  return (
    <div className='relative' id='projects'>
    <ParticlesComponent id="sectionParticles"/>
      <div className="section">
                <Badge variant="outline">What I Did?</Badge>
                <motion.h1 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500 text-center font-sans font-bold">
                  Projects Showcase
                </motion.h1>
              <ThreeDCardDemo/>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { LampContainer } from "@/components/ui/lamp";
import { motion } from 'framer-motion';
import Tech from '@/components/technologies';
const Skills = () => {
  return (
    <div className='rounded-2xl' id="skills">
      <div className='section'>
        <LampContainer>
        <Badge variant="outline">Find Out What My Stack Is</Badge>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-t from-foreground to-cyan-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        My Skills and Stack
      </motion.h1>
    </LampContainer>
        <div className='-mt-28 w-full'>
        <Tech/>
        </div>
      </div>
    </div>
  )
}

export default Skills

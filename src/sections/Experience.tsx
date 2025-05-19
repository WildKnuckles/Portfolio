import React from 'react'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion';
import { TimelineDemo } from '@/components/timeline-section';

const Experience = () => {
  return (
    <div className='section bg-red-500 rounded-2xl' id="experience">
        <Badge variant="outline">Dive Into My Works</Badge>
                <motion.h1 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-zinc-500 text-center font-sans font-bold">
                  Professional Experience
                </motion.h1>
                {/* Timeline */}
                <TimelineDemo/>
    </div>
  )
}

export default Experience

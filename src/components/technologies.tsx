"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-blue-500",
  },
  {
    name: "React",
    icon: "https://storage.googleapis.com/star-lab/novo-site/formacoes/react/react-icon.svg",
    color: "bg-blue-400",
  },
  {
    name: "Webflow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
    color: "bg-blue-300",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-gray-100",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "bg-cyan-400",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-400",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "bg-purple-400",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "bg-gray-400",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "bg-red-400",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    color: "bg-white",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    color: "bg-purple-300",
  },
  {
    name: "pnpm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg",
    color: "bg-orange-400",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    color: "bg-yellow-400",
  },
  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    color: "bg-green-300",
  },
];

export default function Tech() {
  return (
    <section
      id="skills"
      className="w-full"
    >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          <TooltipProvider>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-xl p-2 border border-gray-700 shadow-md hover:scale-110 transition-transform">
                      <div
                        className={`absolute inset-0 rounded-xl ${tech.color} opacity-50 blur-2xl transition-all duration-300`}
                      />

                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 relative z-10"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
                <span className="text-sm text-center text-gray-400">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </TooltipProvider>
        </div>
    </section>
  );
}
"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="font-sans px-4 md:px-10" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-16 sm:py-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground max-w-4xl">
          Timeline from my journey
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md">
          I’ve been working on my career as a developer for the past 2 years. Here’s my journey.
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row justify-start items-start pt-10 md:pt-32 gap-6 md:gap-10"
    >
      {/* Timeline Dot + Title */}
      <div className="relative z-40 flex flex-row md:flex-col items-start w-full md:w-1/3 min-h-[2rem]">
        <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center absolute -left-5 top-2 md:static md:left-0">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-4xl font-bold text-foreground pl-6 md:pl-20 mt-12 md:mt-0">
          {item.title}
        </h3>
      </div>

      {/* Timeline Content */}
      <div className="relative w-full pl-0 md:pl-4">
        {item.content}
      </div>
    </div>
  ))}

  {/* Timeline Line */}
  <div
    style={{ height: height + "px" }}
    className="absolute left-[1.25rem] sm:left-4 md:left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent mask-image-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
    />
  </div>
</div>


    </div>
  );
};

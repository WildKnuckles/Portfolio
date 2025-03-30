"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import Project1 from '@/assets/project1.png'
import Project2 from '@/assets/project2.png'
import Project3 from '@/assets/project3.png'


const cards = [
  {
    title: "My Portfolio",
    description: "Awesome animations with framer motion and three.js",
    image: Project1,
    link: "https://portfolio-jsc.vercel.app/",
  },
  {
    title: "Healthcare App",
    description: "A health care app for patients and doctors",
    image: Project2,
    link: "https://healthcare-three-gamma.vercel.app/",
  },
  {
    title: "Educational App",
    description: "A educational app for students and teachers",
    image: Project3,
    link: "https://cniilp-ao.vercel.app/",
  },
];

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Demo →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <IconBrandGithub size={18} />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

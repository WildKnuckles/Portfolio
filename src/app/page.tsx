"use client";
import React from "react";
import Hero from "@/sections/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import About from "@/sections/About";

export default function Home() {
  return (
    <div className="container-custom">
      <Hero />
      <About />
      <BackgroundBeams className='-z-10'/>
    </div>
  );
}

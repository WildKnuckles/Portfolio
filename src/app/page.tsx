"use client";
import React from "react";
import Hero from "@/sections/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="container-custom">
      <Hero />
      <BackgroundBeams className='-z-10'/>
    </div>
  );
}

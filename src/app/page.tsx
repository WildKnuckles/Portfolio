"use client";
import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <div className="container-custom">
      <Hero />
      <About />
      <Experience />
      
    </div>
  );
}

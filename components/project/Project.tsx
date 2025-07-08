"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Blog from "../blog/Blog";

const projects = [
  { id: 1, title: "Project One", description: "Cool feature", image: "/images/exteriorApplication.png"},
  { id: 2, title: "Project Two", description: "Amazing app", image: "/images/interiorApplication.png"},
  { id: 3, title: "Project Three", description: "Stylish design", image: "/images/resedentialApplication.png"},
  
];


export default function ProjectCarousel() {
 
 const extendedProjects = [
  projects[projects.length - 1],
  ...projects,
  projects[0]
];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at real first
  const [isTransitioning, setIsTransitioning] = useState(true);

  const itemWidthVW = 60;
  const gapVW = 4;
  const totalItemWidth = itemWidthVW + gapVW;

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle edge-jumps after transition ends
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex === 0) {
        setCurrentIndex(projects.length);
      } else if (currentIndex === extendedProjects.length - 1) {
        setCurrentIndex(1);
      }
    };

    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      wrapper?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      // Disable animation before jump
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // ⏱ Auto-slide effect
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => prev + 1);
  }, 5000); // Slide every 4 seconds

  return () => clearInterval(interval); // Clean up
}, []);


  const goPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const offset = `-${currentIndex * totalItemWidth}vw`;

  return (
    <section className="w-screen overflow-hidden bg-gray-50 py-20 relative">
        <h1 className="text-blue-700 text-3xl font-bold leading-tight mb-5 text-center py-4">Project And Showcase</h1>
      <div className="relative w-full flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-full shadow hover:bg-gray-100"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border p-3 rounded-full shadow hover:bg-gray-100"
        >
          →
        </button>

        {/* Carousel container */}
        <div className="overflow-hidden w-full  px-[20vw]">
          <div
            ref={wrapperRef}
            className={`flex gap-[4vw] ${
              isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(${offset})`,
            }}
          >
            {extendedProjects.map((project, index) => (
              <div
                key={index}
                className="shrink-0 w-[60vw] h-[540px] transition-all duration-300"
              >
                <Card
                 className={`w-full h-full shadow-xl border transition-all py-0 duration-700 ease-in-out transform ${
    index === currentIndex
      ? "scale-100 opacity-100 translate-y-0"
      : "scale-95 opacity-70 translate-y-2"
  }`} 
                >
        <CardContent className="relative w-full h-full p-0  overflow-hidden rounded-xl">
  <div className="absolute inset-0">
    <div className="relative w-full h-full">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>

  <div className="absolute inset-0 bg-opacity-40"  />

  <div className="relative z-10 flex flex-col justify-end   h-full  px-8 py-12">
    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
      {project.title}
    </h2>
    <p className="text-white text-lg mt-4 drop-shadow">
      {project.description}
    </p>
  </div>
</CardContent>



                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dot Pagination */}
<div className="flex justify-center items-center mt-8 gap-3">
  {projects.map((_, i) => {
    // Actual index = i + 1 because of extendedProjects shift
    const isActive = currentIndex === i + 1;
    return (
      <div
        key={i}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? "bg-blue-900 scale-110" : "bg-gray-300"
        }`}
      />
    );
  })}
</div>

<Blog/>

    </section>
  );
}

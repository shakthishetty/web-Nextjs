"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const originalPosts = [
  {
    id: 1,
    title: "What Marble Architecture Says About You",
    image: "/images/ominiimage.png",
    link: "/blog/marble-architecture",
  },
  {
    id: 2,
    title: "5 Surprising Benefits of Stone Flooring",
    image: "/images/cementImage.png",
    link: "/blog/stone-flooring-benefits",
  },
  {
    id: 3,
    title: "How to Choose the Right Marble for Your Home",
    image: "/images/buildingImage.png",
    link: "/blog/choose-right-marble",
  },
  {
    id: 4,
    title: "Why Designers Love Italian Marble",
    image: "/images/ominiimage.png",
    link: "/blog/italian-marble-love",
  },
  {
    id: 5,
    title: "Top 10 Luxury Marble Trends in 2025",
    image: "/images/buildingImage.png",
    link: "/blog/marble-trends-2025",
  },
];

const visibleCards = 3;
const cardWidthVW = 26.66;
const gapVW = 2;

const blogPosts = [...originalPosts, ...originalPosts.slice(0, visibleCards)];

export default function Blog() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = originalPosts.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;
    const cardWithGap = (cardWidthVW + gapVW) * (window.innerWidth / 100);

    // Normal scroll
    if (activeIndex < totalSlides + 1) {
      container.scrollTo({
        left: activeIndex * cardWithGap,
        behavior: "smooth",
      });
    }

    // Loop reset when reaching the clones
    if (activeIndex === totalSlides) {
      setTimeout(() => {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
        setActiveIndex(0);
      }, 400); // Match transition duration
    }
  }, [activeIndex, totalSlides]);

  return (
    <div className="relative w-full overflow-x-visible py-10">
      {/* Carousel Content */}
      <div
        ref={contentRef}
        className="flex gap-[2vw] overflow-x-hidden px-[10vw] -ml-[10vw] transition-all duration-700 scroll-smooth"
      >
        {blogPosts.map((post, idx) => (
          <div key={`${post.id}-${idx}`} className="basis-[26.66vw] flex-shrink-0">
            <Card className="h-[318px] overflow-hidden relative rounded-xl py-0">
              <CardContent className="relative w-full h-full p-0">
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <a
                    href={post.link}
                    className="flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Read blog <span className="text-xl">→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Dot Pagination */}
      <div className="mt-6 flex justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeIndex % totalSlides ? "bg-black scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

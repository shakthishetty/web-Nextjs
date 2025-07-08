"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

interface CollectionItem {
  id: number;
  cube_title: string;
  cube_image_url: string;
  collection_title: string;
  collection_description: string;
}

interface Props {
  collection: CollectionItem[];
}

export default function Collection({ collection }: Props) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  // Group by collection_title
  if (!Array.isArray(collection)) {
  console.error("Expected array but got:", collection);
  return null;
}
  const grouped = collection.reduce((acc, item) => {
    const key = item.collection_title;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, CollectionItem[]>);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-4 py-16 relative overflow-hidden bg-gradient-to-br from-[#fdfcfb] to-[#e2ebf0]"
    >
      {/* Background parallax layer (optional add your image here) */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-0 z-0"
      >
        {/* <Image src="/path/to/bg.png" fill className="object-cover opacity-20" alt="bg" /> */}
      </motion.div>

      {/* Foreground Cards */}
      <div className="z-10 col-span-full grid grid-cols-1 lg:grid-cols-2 gap-14">
        {Object.entries(grouped).map(([title, items], index) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
            className="shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center bg-white/80 backdrop-blur-xl border border-gray-200 space-y-8"
          >
            {/* Cube Grid */}
            <div className="grid grid-cols-3 gap-10 sm:gap-14">
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="flex flex-col items-center w-full"
                >
                  <div className="relative w-32 h-40 sm:w-48 sm:h-64 mb-3 shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={item.cube_image_url}
                      alt={item.cube_title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                  <p className="text-base font-medium">{item.cube_title}</p>
                </motion.div>
              ))}
            </div>

            {/* Title & Description */}
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-gray-600 text-base sm:text-lg px-4 sm:px-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {items[0].collection_description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button className="mt-2 px-6 py-3 text-sm sm:text-base shadow-md hover:scale-105 transition-transform">
                Explore Collection
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

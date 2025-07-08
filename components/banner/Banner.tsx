"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function Banner() {
  const ref = useRef(null);

  // Parallax image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <div ref={ref} className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
       style={{ scale: smoothScale }}
  className="absolute inset-0 z-0"
      >
        <Image
          src="/images/bannerImage.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover object-top md:object-[center_25%]"
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center text-white text-center px-4 py-6 z-10">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Sculpting Stone <br />
          <span className="text-primary">Into Timeless Confidence</span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm md:text-base max-w-xl mb-4 text-white/90"
        >
          We specialize in sourcing, processing, and supplying authentic Omani marbles.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button variant="default">Explore Project</Button>
        </motion.div>
      </div>
    </div>
  );
}

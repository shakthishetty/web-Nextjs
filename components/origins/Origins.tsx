"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Origins() {
  return (
    <section className="relative h-[450px] md:h-[520px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/origins.png"
        alt="Origins Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

      {/* Animated Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative z-20 text-center px-6 flex flex-col items-center space-y-6"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-white text-3xl md:text-5xl font-bold tracking-wide"
        >
          Origins & Aspirations
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          A whispered heritage from Oman’s hidden quarries.
          <br />
          A desire to create something that endures.
          <br />
          A vision that carries our marble to the world.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          <Button
            variant="ghost"
            className="border border-white/70 text-white hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 px-7 py-2.5 text-sm md:text-base tracking-wide rounded-full"
          >
            House of Diamond Stone
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

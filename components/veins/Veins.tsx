"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VeinItem {
  title: string;
  description: string;
  stat: string;
  stat_label: string;
  icon: string;
  tooltip: string;
}

export default function Veins({ items }: { items: VeinItem[] }) {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-[#f0f4f8] via-[#eaf3ff] to-[#ffffff]">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-20">
        From Vein to Vision
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 perspective-[1500px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative group h-[360px] [transform-style:preserve-3d] transition-transform duration-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full group-hover:[transform:rotateY(180deg)] transition-transform duration-[1000ms] ease-[cubic-bezier(.25,.8,.25,1)] [transform-style:preserve-3d]">
              {/* Gradient Border */}
              <div className="absolute inset-0 before:absolute before:inset-[-2px] before:rounded-xl before:bg-gradient-to-br before:from-green-300 before:via-white before:to-green-400 before:blur-sm z-0" />

              {/* Front */}
              <div className="absolute inset-0 z-10 bg-white rounded-xl shadow-md border border-transparent group-hover:border-green-300 p-6 flex flex-col items-center text-center [backface-visibility:hidden]">
                <div className="relative w-14 h-14 mb-4 group">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                    priority
                  />
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.tooltip}
                  </motion.span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <motion.p
                  className="text-2xl font-extrabold text-green-600 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.stat}
                </motion.p>
                <p className="text-sm text-gray-600">{item.stat_label}</p>
                <p className="text-xs text-gray-400 mt-2">Hover to flip again</p>
              </div>
            </div>

            {/* Stat below card */}
            <motion.div
              className="mt-4 text-center group-hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-bold text-green-600">{item.stat}</p>
              <p className="text-xs text-gray-500">{item.stat_label}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

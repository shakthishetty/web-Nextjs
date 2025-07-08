"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Marble & Collections", href: "/" },
    { label: "House of Diamond Stone", href: "/aboutUs" },
    { label: "Projects & Showcase", href: "/project" },
  ];

  return (
    <div className="md:hidden relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-3 flex flex-col justify-center items-center space-y-1 group"
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-lg font-semibold text-gray-800"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 underline hover:text-gray-700 mt-10"
              whileHover={{ scale: 1.05 }}
            >
              Close Menu
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

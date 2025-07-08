"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 20 });

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      if (!visible) setVisible(true);
    };

    const handlePointerOut = (e: PointerEvent) => {
      if (
        !e.relatedTarget &&
        (e.pointerType === "mouse" || e.pointerType === "pen")
      ) {
        setVisible(false);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="z-[9999] fixed top-0 left-0 w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none"
      style={{ x: springX, y: springY }}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export function AirplaneAnimation() {
  return (
    <motion.div
      initial={{ x: -100, y: 100, opacity: 0 }}
      animate={{ x: 100, y: -100, opacity: [0, 1, 0] }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none flex items-center justify-center z-50"
    >
      <Plane className="w-16 h-16 text-[#5BB5A9] transform -rotate-45" />
    </motion.div>
  );
}
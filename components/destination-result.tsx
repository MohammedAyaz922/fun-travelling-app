"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationResultProps {
  destination: {
    title: string;
    image: string;
    type: string;
    temperature: string;
    flight: string;
  };
}

export function DestinationResult({ destination }: DestinationResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-8"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="relative h-[500px] w-full">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{destination.title}</h2>
          <div className="flex gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5BB5A9] text-white">
              {destination.type}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5BB5A9] text-white">
              {destination.temperature}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5BB5A9] text-white">
              {destination.flight}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
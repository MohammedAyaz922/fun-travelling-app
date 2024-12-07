"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { type Destination } from "@/lib/types";

export function DestinationCard({
  title,
  image,
  description,
  type,
  temperature,
  flight,
}: Destination) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
            {type}
          </span>
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
            {temperature}
          </span>
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
            {flight}
          </span>
        </div>
      </div>
    </Card>
  );
}
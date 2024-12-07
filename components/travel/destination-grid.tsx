"use client";

import { DestinationCard } from "@/components/destination-card";
import { type Destination } from "@/lib/types";

interface DestinationGridProps {
  destinations: Destination[];
}

export function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Places we want to go</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.title} {...destination} />
        ))}
      </div>
    </section>
  );
}
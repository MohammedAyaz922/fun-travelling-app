"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { TravelFilters } from "@/components/travel/travel-filters";
import { DestinationGrid } from "@/components/travel/destination-grid";
import { AirplaneAnimation } from "@/components/airplane-animation";
import { DestinationResult } from "@/components/destination-result";
import { destinations } from "@/lib/data";

export default function Home() {
  const [type, setType] = useState("");
  const [temperature, setTemperature] = useState("");
  const [flight, setFlight] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (type && temperature && flight) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        setShowResult(true);
      }, 2000);
    }
  };

  const handleClearFilters = () => {
    setType("");
    setTemperature("");
    setFlight("");
    setShowResult(false);
  };

  const selectedDestination = destinations.find(
    (dest) =>
      dest.type === type &&
      dest.temperature === temperature &&
      dest.flight === flight
  );

  if (showResult && selectedDestination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onStartOver={handleClearFilters} showStartOver={true} />
        <main className="container mx-auto px-4 py-8">
          <DestinationResult destination={selectedDestination} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {showAnimation && <AirplaneAnimation />}
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-12">This year we&apos;re going to...</h2>
        <TravelFilters
          type={type}
          temperature={temperature}
          flight={flight}
          onTypeChange={setType}
          onTemperatureChange={setTemperature}
          onFlightChange={setFlight}
          onSubmit={handleSubmit}
          onClear={handleClearFilters}
        />
        <DestinationGrid destinations={destinations} />
      </main>
    </div>
  );
}
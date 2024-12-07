"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface TravelFiltersProps {
  type: string;
  temperature: string;
  flight: string;
  onTypeChange: (value: string) => void;
  onTemperatureChange: (value: string) => void;
  onFlightChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export function TravelFilters({
  type,
  temperature,
  flight,
  onTypeChange,
  onTemperatureChange,
  onFlightChange,
  onSubmit,
  onClear,
}: TravelFiltersProps) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">TYPE</h3>
          <RadioGroup value={type} onValueChange={onTypeChange}>
            {["Adventure", "Beach", "City", "Ski"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`type-${option}`} />
                <Label htmlFor={`type-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">TEMPERATURE</h3>
          <RadioGroup value={temperature} onValueChange={onTemperatureChange}>
            {["Hot", "Cold", "Temperate"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`temp-${option}`} />
                <Label htmlFor={`temp-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">FLIGHT</h3>
          <RadioGroup value={flight} onValueChange={onFlightChange}>
            {["Long", "Medium", "Short"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`flight-${option}`} />
                <Label htmlFor={`flight-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="flex gap-4 mb-16">
        <Button
          className="bg-[#5BB5A9] hover:bg-[#4a9e93]"
          onClick={onSubmit}
          disabled={!type || !temperature || !flight}
        >
          Tell me already!!!
        </Button>
        <Button
          variant="outline"
          onClick={onClear}
          className="text-[#5BB5A9] border-[#5BB5A9] hover:bg-[#5BB5A9] hover:text-white"
        >
          Clear Filters
        </Button>
      </div>
    </>
  );
}
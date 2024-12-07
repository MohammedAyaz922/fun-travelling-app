"use client";

import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onStartOver?: () => void;
  showStartOver?: boolean;
}

export function Header({ onStartOver, showStartOver }: HeaderProps) {
  return (
    <header className="bg-[#5BB5A9] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <Plane className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Time to Have More Fun</h1>
        </div>
        <Button
          variant="outline"
          className="text-white border-white hover:text-[#5BB5A9] hover:bg-white"
          onClick={onStartOver}
        >
          {showStartOver ? "Start Over" : "Add Place"}
        </Button>
      </div>
    </header>
  );
}
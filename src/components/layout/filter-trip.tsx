"use client";

import { useState } from "react";

export default function Component() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="w-[305px] h-12 p-1 flex items-center bg-muted rounded-full mt-16 mx-auto">
      <button
        onClick={() => setSelected("all")}
        className={`flex-1 h-10 rounded-full text-sm transition-colors ${
          selected === "all"
            ? "bg-background shadow-sm"
            : "hover:bg-background/50"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setSelected("upcoming")}
        className={`flex-1 h-10 rounded-full text-sm transition-colors ${
          selected === "upcoming"
            ? "bg-background shadow-sm"
            : "hover:bg-background/50"
        }`}
      >
        Upcoming
      </button>
      <button
        onClick={() => setSelected("completed")}
        className={`flex-1 h-10 rounded-full text-sm transition-colors ${
          selected === "completed"
            ? "bg-background shadow-sm"
            : "hover:bg-background/50"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

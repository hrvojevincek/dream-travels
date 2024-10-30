"use client";

import { useState } from "react";

export default function Component() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="w-[305px] h-12 flex items-center bg-white border border-[#D8D8D8] rounded-full mt-16 mx-auto">
      <button
        onClick={() => setSelected("all")}
        className={`flex-1 h-full rounded-s-full text-sm transition-colors ${
          selected === "all" ? "bg-[#F3F3F3]" : "hover:bg-[#F3F3F3]/50"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setSelected("upcoming")}
        className={`flex-1 h-full border-l border-r border-[#D8D8D8] text-sm transition-colors ${
          selected === "upcoming" ? "bg-[#F3F3F3]" : "hover:bg-[#F3F3F3]/50"
        }`}
      >
        Upcoming
      </button>
      <button
        onClick={() => setSelected("completed")}
        className={`flex-1 h-full rounded-r-full text-sm transition-colors ${
          selected === "completed" ? "bg-[#F3F3F3]" : "hover:bg-[#F3F3F3]/50"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

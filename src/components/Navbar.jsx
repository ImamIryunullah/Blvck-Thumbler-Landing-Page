import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 grid grid-cols-2">
      {/* KIRI */}
      <div className="bg-[#1B1F24] flex items-center px-6">
        <span className="text-xl font-bold text-white pl-12">
          BLVCK THUMBLER.
        </span>
      </div>

      {/* KANAN */}
      <div className="bg-[#262C33] flex items-center justify-end px-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 pr-12"
          aria-label="Open Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
}

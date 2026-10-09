import React from "react";

export function SectionFlourish({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center ml-2.5 text-amber-600 align-middle ${className}`}
      style={{ display: "inline-flex", verticalAlign: "middle" }}
    >
      <svg
        width="28"
        height="18"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.85 }}
      >
        {/* Delicate golden scroll / butterfly flourish motif */}
        <path
          d="M20 12 C16 4 8 2 2 8 C-2 13 4 20 11 16 C16 13 18 12 20 12 C22 12 24 13 29 16 C36 20 42 13 38 8 C32 2 24 4 20 12 Z"
          stroke="#C28B46"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="12" r="1.5" fill="#C28B46" />
        <circle cx="8" cy="10" r="1.2" fill="#C28B46" />
        <circle cx="32" cy="10" r="1.2" fill="#C28B46" />
      </svg>
    </span>
  );
}

export function CornerFoliage({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="110"
      height="110"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#C28B46" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        {/* Main stem curve */}
        <path d="M10 110 C20 70 50 30 110 10" />
        
        {/* Leaves branching out */}
        <path d="M35 80 C32 68 40 60 50 65 C48 76 40 82 35 80 Z" fill="#C28B46" fillOpacity="0.25" />
        <path d="M55 58 C50 46 60 38 70 44 C67 55 59 60 55 58 Z" fill="#C28B46" fillOpacity="0.25" />
        <path d="M80 34 C76 22 86 16 94 22 C91 32 84 37 80 34 Z" fill="#C28B46" fillOpacity="0.25" />
        
        {/* Opposite side small leaves */}
        <path d="M28 88 C38 86 42 94 38 100 C30 98 26 92 28 88 Z" fill="#C28B46" fillOpacity="0.2" />
        <path d="M46 68 C56 66 60 74 56 80 C48 78 44 72 46 68 Z" fill="#C28B46" fillOpacity="0.2" />
        <path d="M70 46 C80 44 84 52 80 58 C72 56 68 50 70 46 Z" fill="#C28B46" fillOpacity="0.2" />
        
        {/* Tiny golden buds / berries */}
        <circle cx="22" cy="74" r="2" fill="#C28B46" />
        <circle cx="48" cy="48" r="2" fill="#C28B46" />
        <circle cx="72" cy="26" r="2" fill="#C28B46" />
        <circle cx="104" cy="14" r="2.5" fill="#C28B46" />
      </g>
    </svg>
  );
}

export function BotanicalBranch({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={className}
      width="90"
      height="120"
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <g stroke="#C28B46" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
        <path d="M50 135 C50 90 65 50 85 10" />
        <path d="M52 105 C40 98 42 84 54 88 C56 98 54 104 52 105 Z" fill="#C28B46" fillOpacity="0.2" />
        <path d="M60 80 C74 74 76 88 64 90 C58 87 58 82 60 80 Z" fill="#C28B46" fillOpacity="0.2" />
        <path d="M64 55 C52 46 56 34 66 38 C68 47 66 53 64 55 Z" fill="#C28B46" fillOpacity="0.2" />
        <path d="M72 35 C84 28 88 40 76 43 C72 40 71 36 72 35 Z" fill="#C28B46" fillOpacity="0.2" />
        <circle cx="85" cy="10" r="2" fill="#C28B46" />
      </g>
    </svg>
  );
}

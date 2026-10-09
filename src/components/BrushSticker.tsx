import React from "react";

export default function BrushSticker({ className = "" }: { className?: string }) {
  return (
    <div
      className={`brush-sticker-wrapper ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
        transform: "rotate(-2.5deg)",
        filter: "drop-shadow(0 10px 20px rgba(40, 20, 10, 0.22))",
        userSelect: "none",
      }}
    >
      <svg
        width="220"
        height="76"
        viewBox="0 0 240 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <filter id="paperRoughness" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Textured brush / torn paper background */}
        <path
          d="M14 6 C6 18 10 32 3 44 C8 56 4 68 16 74 C60 76 160 74 224 76 C234 68 230 52 237 40 C231 28 235 16 226 8 C180 5 80 4 14 6 Z"
          fill="#F5ECE0"
          stroke="#E8DAC8"
          strokeWidth="1.2"
          filter="url(#paperRoughness)"
        />

        {/* Secondary inner dry-brush stroke accent */}
        <path
          d="M22 14 C80 12 170 12 218 15"
          stroke="#DFC6AA"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          opacity="0.6"
        />
        <path
          d="M20 66 C90 68 180 66 216 64"
          stroke="#DFC6AA"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity="0.6"
        />

        {/* Script Text */}
        <text
          x="120"
          y="34"
          textAnchor="middle"
          fill="#4A2818"
          fontSize="24"
          fontWeight="600"
          fontFamily="var(--font-script), 'Caveat', 'Great Vibes', cursive"
          letterSpacing="0.5"
        >
          Delicious Food
        </text>

        <text
          x="110"
          y="62"
          textAnchor="middle"
          fill="#4A2818"
          fontSize="24"
          fontWeight="600"
          fontFamily="var(--font-script), 'Caveat', 'Great Vibes', cursive"
          letterSpacing="0.5"
        >
          Happier People
        </text>

        {/* Heart icon */}
        <path
          d="M188 56 C188 52 192 48 196 50 C200 48 204 52 204 56 C204 63 196 68 196 68 C196 68 188 63 188 56 Z"
          stroke="#4A2818"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

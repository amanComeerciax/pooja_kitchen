import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PoojaLogo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 90, height: 60 },
    md: { width: 115, height: 76 },
    lg: { width: 175, height: 116 },
  }[size];

  return (
    <div
      className={`pooja-logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Pooja's Kitchen - Delicious & Fresh"
        width={dimensions.width}
        height={dimensions.height}
        priority={size !== "sm"}
        style={{
          objectFit: "contain",
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          maxWidth: "100%",
          display: "block",
        }}
      />
    </div>
  );
}

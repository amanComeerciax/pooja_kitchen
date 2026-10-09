"use client";

import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919833815423?text=Hi%20Pooja's%20Kitchen,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Direct Chat on WhatsApp"
      title="Chat with Pooja's Kitchen on WhatsApp"
    >
      <WhatsAppIcon size={32} fill="#FFFFFF" />
      <span
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#FF3B30",
          border: "2px solid #FFFFFF",
        }}
      />
    </a>
  );
}

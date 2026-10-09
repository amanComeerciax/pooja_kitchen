"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface PreFooterCTAProps {
  onOpenOrderModal?: () => void;
}

export default function PreFooterCTA({ onOpenOrderModal }: PreFooterCTAProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Pooja's Kitchen, I would like to inquire about live catering / party orders for an upcoming event."
    );
    window.open(`https://wa.me/919833815423?text=${text}`, "_blank");
  };

  return (
    <section className="dhokla-cta-section">
      <div className="dhokla-cta-overlay" aria-hidden="true" />

      <div className="dhokla-cta-container">
        {/* Left Column: Heading, Subtitle & WhatsApp Button */}
        <div className="dhokla-cta-left">
          <h2 className="dhokla-cta-title">
            <span className="dhokla-title-white">Let&apos;s Make Your</span>
            <span className="dhokla-title-gold">Next Event Special</span>
          </h2>

          <p className="dhokla-cta-desc">
            Get in touch with us for live catering, party orders or any custom request. We&apos;d love to be a part of your celebration.
          </p>

          <button
            onClick={handleWhatsApp}
            className="dhokla-cta-wa-btn"
            aria-label="Order on WhatsApp"
          >
            <span className="dhokla-wa-icon" aria-hidden="true">
              <WhatsAppIcon size={18} />
            </span>
            <span>Order on WhatsApp</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Right Area: Anchored directly over the white paper on the right */}
      <div className="dhokla-cta-paper-anchor">
        <div className="dhokla-paper-text">
          <span>Delicious Food</span>
          <span>Happier People</span>
          <span>Stronger Bonds ♡</span>
        </div>
      </div>
    </section>
  );
}

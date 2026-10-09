"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.761.821 2.796.821 3.183 0 5.769-2.586 5.77-5.766.001-3.182-2.585-5.77-5.77-6.008zm3.364 8.163c-.144.405-.837.774-1.17.822-.312.043-.699.063-2.115-.521-1.811-.746-2.961-2.593-3.051-2.713-.09-.12-.733-.974-.733-1.859 0-.884.463-1.319.628-1.498.164-.179.359-.224.479-.224.12 0 .239.002.344.006.111.005.259-.042.404.307.15.359.509 1.242.554 1.332.045.09.075.195.015.315-.06.12-.09.195-.18.3-.09.105-.189.234-.27.315-.09.09-.184.187-.079.367.105.18.468.772 1.004 1.249.691.615 1.274.806 1.454.896.18.09.285.075.39-.045.105-.12.45-.524.57-.704.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.099.84z" />
              </svg>
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

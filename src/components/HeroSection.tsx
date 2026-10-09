"use client";

import React from "react";
import { ChefHat, Utensils, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import BrushSticker from "./BrushSticker";

interface HeroSectionProps {
  onPlanEvent: () => void;
  onExploreMenu: () => void;
}

export default function HeroSection({ onPlanEvent, onExploreMenu }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-banner-section">
      <div className="hero-banner-container">
        {/* Left Content Area (Overlaid on the cream part of heroimage.png) */}
        <div className="hero-content-wrapper">
          <h1 className="hero-main-title">
            <span className="title-line-maroon">Good Food.</span>
            <br />
            <span className="title-line-gold">Beautiful Gatherings.</span>
          </h1>

          <p className="hero-main-subtitle">
            Freshly prepared favourites and thoughtful live catering for your celebrations.
          </p>

          <div className="hero-button-group">
            <button
              onClick={onPlanEvent}
              className="btn-hero-primary"
              aria-label="Plan Your Event"
            >
              <WhatsAppIcon size={18} fill="#25D366" />
              <span>Plan Your Event</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreMenu}
              className="btn-hero-secondary"
              aria-label="Explore the Menu"
            >
              <span>Explore the Menu</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Features / Value Props Bar */}
          <div className="hero-features-row">
            <div className="hero-feature-item">
              <ChefHat size={22} className="feature-icon" strokeWidth={1.8} />
              <span>Live Catering</span>
            </div>

            <div className="feature-divider" aria-hidden="true" />

            <div className="hero-feature-item">
              <Utensils size={20} className="feature-icon" strokeWidth={1.8} />
              <span>Party Orders</span>
            </div>

            <div className="feature-divider" aria-hidden="true" />

            <div className="hero-feature-item">
              <Sparkles size={20} className="feature-icon" strokeWidth={1.8} />
              <span>Freshly Prepared</span>
            </div>
          </div>
        </div>

        {/* Brush Sticker (Positioned on the lower right over the buffet photography) */}
        <div className="hero-sticker-placement">
          <BrushSticker />
        </div>
      </div>
    </section>
  );
}

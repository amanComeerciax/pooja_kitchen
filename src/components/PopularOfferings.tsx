"use client";

import React from "react";
import Image from "next/image";

interface OfferingItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const offerings: OfferingItem[] = [
  {
    id: "dhokla",
    title: "Sandwich Dhokla",
    subtitle: "A crowd favourite, always fresh.",
    image: "/images/sandwich-dhokla.jpg",
  },
  {
    id: "platters",
    title: "Party Platters",
    subtitle: "Perfect for small & large gatherings.",
    image: "/images/party-platters.jpg",
  },
  {
    id: "tea",
    title: "Tea & Snacks",
    subtitle: "Simple joys, great conversations.",
    image: "/images/tea-snacks.jpg",
  },
  {
    id: "live",
    title: "Live Counters",
    subtitle: "Freshly prepared at your event.",
    image: "/images/live-counters.jpg",
  },
];

interface PopularOfferingsProps {
  onSelectItem: (item: OfferingItem) => void;
}

export default function PopularOfferings({ onSelectItem }: PopularOfferingsProps) {
  return (
    <section id="offerings" className="offerings-section">
      <div className="offerings-container">
        {/* Section Header */}
        <div className="section-header-row">
          <h2 className="section-title">
            Our Popular <span className="accent">Offerings</span>
          </h2>
          <p className="section-subtext">
            A selection of our most loved items, perfect for any occasion.
          </p>
        </div>

        {/* 4 Cards Grid without box backgrounds */}
        <div className="offerings-grid">
          {offerings.map((item) => (
            <div
              key={item.id}
              className="offering-card-item"
              onClick={() => onSelectItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectItem(item);
                }
              }}
              aria-label={`View details for ${item.title}`}
            >
              <div className="offering-image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={280}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div className="offering-text-wrap">
                <h3 className="offering-heading">{item.title}</h3>
                <p className="offering-caption">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

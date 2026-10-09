"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/images/hero-catering.jpg",
    title: "Grand Banquet Buffet",
    category: "Buffet Setup",
  },
  {
    id: 2,
    image: "/images/sandwich-dhokla.jpg",
    title: "Sandwich Dhokla Platter",
    category: "Signature Dish",
  },
  {
    id: 3,
    image: "/images/dinner-plates.jpg",
    title: "Luxury Table Setting",
    category: "Event Decor",
  },
  {
    id: 4,
    image: "/images/tea-snacks.jpg",
    title: "Live Masala Chai Station",
    category: "Live Beverage",
  },
  {
    id: 5,
    image: "/images/buffet-guests.jpg",
    title: "Festive Evening Reception",
    category: "Guest Experience",
  },
];

interface OurWorkProps {
  onImageClick: (item: GalleryItem) => void;
}

export default function OurWork({ onImageClick }: OurWorkProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-work" className="our-work-section">
      <div className="our-work-container">
        {/* Section Header */}
        <div className="our-work-header-row">
          <div className="our-work-title-wrap">
            <h2 className="our-work-title">
              Our Work
            </h2>
            <p className="our-work-subtext">
              A glimpse of our recent events and live catering setups.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="our-work-arrows">
            <button
              onClick={() => handleScroll("left")}
              className="our-work-arrow-btn"
              aria-label="Previous work"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="our-work-arrow-btn active"
              aria-label="Next work"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 5 Images Grid / Carousel */}
        <div className="our-work-grid" ref={scrollContainerRef}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="our-work-card"
              onClick={() => onImageClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onImageClick(item);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={270}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div className="our-work-overlay">
                <ZoomIn size={18} />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

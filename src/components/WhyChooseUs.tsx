"use client";

import React from "react";
import { Sprout, ChefHat, ClipboardList, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: "fresh",
      icon: <Sprout size={32} color="#A06830" strokeWidth={1.7} />,
      title: "Fresh Ingredients",
      desc: "Quality ingredients for authentic taste.",
    },
    {
      id: "hygiene",
      icon: <ChefHat size={32} color="#A06830" strokeWidth={1.7} />,
      title: "Hygienic Preparation",
      desc: "Clean, safe and well maintained kitchen.",
    },
    {
      id: "custom",
      icon: <ClipboardList size={32} color="#A06830" strokeWidth={1.7} />,
      title: "Custom Menus",
      desc: "Menus tailored for your event.",
    },
    {
      id: "ontime",
      icon: <Clock size={32} color="#A06830" strokeWidth={1.7} />,
      title: "On-Time Service",
      desc: "Punctual and well organized service.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Centered Heading */}
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Pooja&apos;s Kitchen?</h2>
          <p className="why-choose-subtitle">
            Good food, great service and a memorable experience.
          </p>
        </div>

        {/* 4 Feature Cards in a Row */}
        <div className="why-choose-grid">
          {features.map((feat) => (
            <div key={feat.id} className="why-choose-card">
              <div className="why-choose-icon-box">{feat.icon}</div>
              <div className="why-choose-text-box">
                <h3 className="why-choose-card-title">{feat.title}</h3>
                <p className="why-choose-card-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { MessageCircle, ClipboardList, ChefHat, Utensils, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function HowToOrder() {
  const steps = [
    {
      num: "1",
      icon: <WhatsAppIcon size={28} fill="#4A101D" />,
      title: "Contact Us",
      description: "Share your event details on WhatsApp.",
    },
    {
      num: "2",
      icon: <ClipboardList size={28} color="#4A101D" strokeWidth={1.8} />,
      title: "Choose Menu",
      description: "Explore our menu and share your preferences.",
    },
    {
      num: "3",
      icon: <ChefHat size={28} color="#4A101D" strokeWidth={1.8} />,
      title: "We Prepare",
      description: "Our team gets everything ready with fresh ingredients.",
    },
    {
      num: "4",
      icon: <Utensils size={28} color="#4A101D" strokeWidth={1.8} />,
      title: "Enjoy",
      description: "Delicious food served at your event.",
    },
  ];

  return (
    <section id="how-to-order" className="how-order-section">
      <div className="how-order-container">
        {/* Section Header */}
        <div className="how-order-header">
          <h2 className="how-order-title">How to Order</h2>
          <p className="how-order-subtext">Getting your favourite food is easy.</p>
        </div>

        {/* 4 Connected Steps */}
        <div className="how-order-steps-grid">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="how-order-step-item">
                <div className="how-order-num-badge">{step.num}</div>
                <div className="how-order-icon-wrap">{step.icon}</div>
                <div className="how-order-step-info">
                  <h3 className="how-order-step-heading">{step.title}</h3>
                  <p className="how-order-step-desc">{step.description}</p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="how-order-chevron" aria-hidden="true">
                  <ChevronRight size={22} color="#C49A6C" strokeWidth={1.8} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

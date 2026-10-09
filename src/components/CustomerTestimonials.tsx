"use client";

import React from "react";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Absolutely loved the food and service. Everything was fresh and delicious!",
      author: "– Happy Customer",
    },
    {
      id: 2,
      quote: "Perfect for our family function. Guests really enjoyed the live counters.",
      author: "– Happy Customer",
    },
    {
      id: 3,
      quote: "Great taste, on-time service and very well organized.",
      author: "– Happy Customer",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="testimonials-subtitle">Real experiences from our happy customers.</p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="testimonials-cards-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-quote-card">
              <div className="quote-mark-icon" aria-hidden="true">
                “
              </div>
              <p className="testimonial-quote-text">{t.quote}</p>
              <div className="testimonial-author-name">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

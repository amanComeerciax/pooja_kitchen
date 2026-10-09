"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface MomentsBannerProps {
  onPlanEvent?: () => void;
}

export default function MomentsBanner({ onPlanEvent }: MomentsBannerProps) {
  const occasions = [
    {
      name: "Weddings",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E6BA7A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="14" r="5" />
          <circle cx="16" cy="14" r="5" />
          <path d="M12 9 L12 6" />
          <path d="M10 7 L14 7" />
        </svg>
      ),
    },
    {
      name: "Birthday Parties",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E6BA7A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14 L20 14 L19 21 L5 21 Z" />
          <path d="M3 14 C3 12 7 12 7 14 C7 12 11 12 11 14 C11 12 15 12 15 14 C15 12 19 12 19 14 C19 12 21 12 21 14" />
          <line x1="8" y1="10" x2="8" y2="7" />
          <line x1="12" y1="10" x2="12" y2="6" />
          <line x1="16" y1="10" x2="16" y2="7" />
          <circle cx="8" cy="5" r="1" fill="#E6BA7A" />
          <circle cx="12" cy="4" r="1" fill="#E6BA7A" />
          <circle cx="16" cy="5" r="1" fill="#E6BA7A" />
        </svg>
      ),
    },
    {
      name: "Family Functions",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E6BA7A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3" />
          <circle cx="6" cy="11" r="2.5" />
          <circle cx="18" cy="11" r="2.5" />
          <path d="M4 20 C4 16.5 8 15 12 15 C16 15 20 16.5 20 20" />
        </svg>
      ),
    },
    {
      name: "Office Gatherings",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E6BA7A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="15" rx="2" />
          <line x1="8" y1="5" x2="8" y2="20" />
          <line x1="16" y1="5" x2="16" y2="20" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="moments" className="cater-celebrate-section">
      <div className="cater-celebrate-container">
        <div className="cater-celebrate-content">
          <span className="cater-eyebrow">LIVE CATERING &amp; PARTY ORDERS</span>

          <h2 className="cater-heading">
            We Cater,<br />
            You Celebrate.
          </h2>

          <p className="cater-paragraph">
            From intimate family functions to grand celebrations, we bring delicious food and warm service to make your events extra special.
          </p>

          <div className="cater-occasions-grid">
            {occasions.map((occ, idx) => (
              <React.Fragment key={occ.name}>
                <div className="cater-occasion-col">
                  <div className="cater-occasion-icon">{occ.icon}</div>
                  <span className="cater-occasion-name">{occ.name}</span>
                </div>
                {idx < occasions.length - 1 && (
                  <div className="cater-occasion-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={onPlanEvent}
            className="btn-cater-plan"
            aria-label="Plan Your Event"
          >
            <span>Plan Your Event</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

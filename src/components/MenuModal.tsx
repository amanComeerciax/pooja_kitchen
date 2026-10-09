"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderDish: (dishName: string) => void;
}

export default function MenuModal({ isOpen, onClose, onOrderDish }: MenuModalProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  if (!isOpen) return null;

  const categories = [
    { id: "all", name: "All Specialities" },
    { id: "signature", name: "Signature Items" },
    { id: "live", name: "Live Counters" },
    { id: "platters", name: "Party Platters" },
    { id: "tea", name: "Tea & Snacks" },
  ];

  const menuItems = [
    {
      id: "m1",
      category: "signature",
      title: "Signature Sandwich Dhokla",
      desc: "Soft steamed Gujarati dhokla layered with spicy green coriander-mint chutney and tempered with mustard seeds, sesame, and freshly grated coconut.",
      image: "/images/sandwich-dhokla.jpg",
      badge: "Most Popular",
    },
    {
      id: "m2",
      category: "platters",
      title: "Royal Party Platter",
      desc: "Curated assortment of mini samosas, golden kachoris, paneer tikka skewers, assorted dhokla bites, paired with mint & date-tamarind dips.",
      image: "/images/party-platters.jpg",
      badge: "Celebration Favourite",
    },
    {
      id: "m3",
      category: "tea",
      title: "Catering Masala Cutting Chai",
      desc: "Slow brewed adrak-elaichi cutting tea served steaming hot alongside crisp evening savouries.",
      image: "/images/tea-snacks.jpg",
      badge: "Live Stall",
    },
    {
      id: "m4",
      category: "live",
      title: "Live Dhokla & Chaat Counter",
      desc: "Interactive live station where hot dhoklas and customizable delicacies are prepared fresh right in front of your guests.",
      image: "/images/live-counters.jpg",
      badge: "Live Setup",
    },
    {
      id: "m5",
      category: "signature",
      title: "Festive Banquet Buffet Feast",
      desc: "Complete vegetarian banquet feast featuring aromatic saffron biryani, rich dal makhani, paneer gravies, and artisan breads.",
      image: "/images/hero-catering.jpg",
      badge: "Full Service",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: "780px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={18} color="var(--color-maroon)" />
              <h3 className="modal-title serif-font">Explore Our Catering Menu</h3>
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-text-muted)", marginTop: "4px" }}>
              100% Pure Vegetarian Delicacies crafted with authentic flavours &amp; fresh ingredients.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "16px 28px 8px",
            borderBottom: "1px solid var(--border-subtle)",
            overflowX: "auto",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                border: activeCategory === cat.id ? "1.5px solid var(--color-maroon)" : "1px solid var(--border-card)",
                backgroundColor: activeCategory === cat.id ? "var(--color-maroon)" : "#FFFFFF",
                color: activeCategory === cat.id ? "#FFFFFF" : "var(--color-text-main)",
                transition: "all 0.2s ease",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr auto",
                gap: "18px",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid var(--border-card)",
                backgroundColor: "#FAF8F5",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "110px",
                  height: "85px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "16px", color: "var(--color-maroon)" }} className="serif-font">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        backgroundColor: "#EFE4D6",
                        color: "var(--color-maroon)",
                        padding: "2px 8px",
                        borderRadius: "999px",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onOrderDish(item.title)}
                  className="btn-primary"
                  style={{ padding: "8px 16px", fontSize: "13px" }}
                >
                  <MessageCircle size={15} fill="#25D366" stroke="#25D366" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          ))}

          {/* Jain / Customization Note */}
          <div
            style={{
              padding: "14px 18px",
              borderRadius: "10px",
              backgroundColor: "#FFF9F0",
              border: "1px solid #EEDBC2",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "#7E5624",
            }}
          >
            <CheckCircle2 size={18} color="#C28B46" />
            <span>
              <strong>Jain Options Available:</strong> All items including Sandwich Dhokla, Platters &amp; Gravies can be prepared in 100% pure Jain recipes upon request.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

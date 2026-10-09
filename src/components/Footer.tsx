"use client";

import React from "react";
import PoojaLogo from "./PoojaLogo";
import { Phone, MessageCircle, Heart } from "lucide-react";

interface FooterProps {
  onOpenOrderModal: () => void;
}

export default function Footer({ onOpenOrderModal }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-brand-col" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <PoojaLogo size="lg" />
            <div className="footer-brand-tagline" style={{ marginTop: 0 }}>
              Delicious Food.<br />
              Happier Celebrations. ♡
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links-columns">
              <ul className="footer-links-list">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("hero");
                    }}
                    className="footer-link"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#offerings"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("offerings");
                    }}
                    className="footer-link"
                  >
                    Our Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#moments"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("moments");
                    }}
                    className="footer-link"
                  >
                    Live Catering
                  </a>
                </li>
              </ul>

              <ul className="footer-links-list">
                <li>
                  <a
                    href="#how-to-order"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("how-to-order");
                    }}
                    className="footer-link"
                  >
                    Party Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#our-work"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("our-work");
                    }}
                    className="footer-link"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("contact");
                    }}
                    className="footer-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-contact-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-items">
              <a
                href="tel:+919833815423"
                className="contact-phone-link"
                style={{ fontSize: "16px", color: "var(--color-maroon)" }}
              >
                <Phone size={18} />
                <span>+91 98338 15423</span>
              </a>
              <a
                href="tel:+917666720002"
                className="contact-phone-link"
                style={{ fontSize: "16px", color: "var(--color-maroon)" }}
              >
                <Phone size={18} />
                <span>+91 76667 20002</span>
              </a>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "14px", marginTop: "10px" }}
              aria-label="Order on WhatsApp"
            >
              <MessageCircle size={18} fill="#25D366" stroke="#25D366" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-copyright-bar">
          <p>© 2026 Pooja&apos;s Kitchen. Pure Vegetarian Delicacies &amp; Live Catering.</p>
          <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Crafted with <Heart size={14} color="#C28B46" fill="#C28B46" /> for memorable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}

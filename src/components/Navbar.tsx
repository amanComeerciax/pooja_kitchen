"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Our Menu", href: "#offerings" },
    { name: "Live Catering", href: "#moments" },
    { name: "Party Orders", href: "#how-to-order" },
    { name: "About Us", href: "#our-work" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (name: string, href: string) => {
    setActiveTab(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="main-navbar-header">
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home", "#hero");
          }}
          className="navbar-brand"
          aria-label="Pooja's Kitchen"
        >
          <Image
            src="/images/logo.png"
            alt="Pooja's Kitchen"
            width={130}
            height={68}
            priority
            style={{
              height: "64px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="navbar-nav-center" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  className={`navbar-link ${activeTab === item.name ? "active" : ""}`}
                >
                  {item.name}
                  {activeTab === item.name && <span className="nav-active-bar" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: WhatsApp CTA Button */}
        <div className="navbar-right-actions">
          <button
            onClick={onOpenOrderModal}
            className="navbar-whatsapp-btn"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle size={18} fill="#25D366" stroke="#25D366" />
            <span className="desktop-nav-btn-text">Order on WhatsApp</span>
            <span className="mobile-nav-btn-text">Order</span>
          </button>

          {/* Mobile Menu Toggle Button (Strictly Hidden on Desktop) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  className={`mobile-nav-link ${activeTab === item.name ? "active" : ""}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mobile-contact-item">
              <a href="tel:+919833815423" className="mobile-phone-link">
                <Phone size={16} />
                <span>+91 98338 15423</span>
              </a>
              <a href="tel:+917666720002" className="mobile-phone-link">
                <Phone size={16} />
                <span>+91 76667 20002</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

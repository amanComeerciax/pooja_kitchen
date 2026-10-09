"use client";

import React from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { GalleryItem } from "./OurWork";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export default function LightboxModal({ item, onClose, onInquire }: LightboxModalProps) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        style={{ maxWidth: "800px", padding: "0", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: "relative", width: "100%", height: "460px", backgroundColor: "#000" }}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "contain" }}
          />
          <button
            onClick={onClose}
            aria-label="Close image preview"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div
          style={{
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-gold)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {item.category}
            </span>
            <h3 style={{ fontSize: "19px", color: "var(--color-maroon)" }} className="serif-font">
              {item.title}
            </h3>
          </div>

          <button
            onClick={() => onInquire(item.title)}
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "14px" }}
          >
            <MessageCircle size={16} fill="#25D366" stroke="#25D366" />
            <span>Book this Setup</span>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { X, MessageCircle, Calendar, Users, Sparkles, Check } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface EventPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOccasion?: string;
}

export default function EventPlannerModal({
  isOpen,
  onClose,
  preselectedOccasion = "",
}: EventPlannerModalProps) {
  const [occasion, setOccasion] = useState(preselectedOccasion || "Family Function");
  const [guestCount, setGuestCount] = useState("50-100");
  const [eventDate, setEventDate] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Live Sandwich Dhokla Counter",
    "Party Platters",
  ]);
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const occasionsList = [
    "Wedding",
    "Family Function",
    "Office Gathering",
    "Celebrations & Birthday",
    "House Party",
    "Puja / Religious Ceremony",
  ];

  const serviceOptions = [
    "Live Sandwich Dhokla Counter",
    "Party Platters",
    "Tea & Snacks Counter",
    "Full Buffet Setup",
    "Chaat Counter",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const servicesText = selectedServices.length > 0 ? selectedServices.join(", ") : "Custom Requirements";
    const message = encodeURIComponent(
      `*Pooja's Kitchen Event Inquiry*\n\n` +
      `📅 *Occasion:* ${occasion}\n` +
      `👥 *Guests:* ${guestCount}\n` +
      `🗓️ *Date:* ${eventDate || "To be decided"}\n` +
      `✨ *Services Interested:* ${servicesText}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : "") +
      `\nPlease let me know the availability and package details!`
    );

    window.open(`https://wa.me/919833815423?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={20} color="var(--color-maroon)" />
            <h3 className="modal-title serif-font">Plan Your Event Catering</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSendWhatsApp} className="modal-body">
          {/* Occasion */}
          <div className="form-group">
            <label className="form-label">Type of Occasion</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {occasionsList.map((occ) => (
                <button
                  type="button"
                  key={occ}
                  onClick={() => setOccasion(occ)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textAlign: "left",
                    border: occasion === occ ? "1.5px solid var(--color-maroon)" : "1px solid var(--border-card)",
                    backgroundColor: occasion === occ ? "#F8EFEF" : "#FFFFFF",
                    color: occasion === occ ? "var(--color-maroon)" : "var(--color-text-main)",
                    transition: "all 0.15s ease",
                  }}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Count & Date */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Users size={14} color="var(--color-maroon)" />
                <span>Estimated Guests</span>
              </label>
              <select
                className="form-select"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                <option value="20-50 guests">20 - 50 guests</option>
                <option value="50-100 guests">50 - 100 guests</option>
                <option value="100-250 guests">100 - 250 guests</option>
                <option value="250-500 guests">250 - 500 guests</option>
                <option value="500+ guests">500+ guests</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} color="var(--color-maroon)" />
                <span>Event Date</span>
              </label>
              <input
                type="date"
                className="form-input"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
          </div>

          {/* Services interested */}
          <div className="form-group">
            <label className="form-label">Services Interested In</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {serviceOptions.map((srv) => {
                const selected = selectedServices.includes(srv);
                return (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => toggleService(srv)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "7px 12px",
                      borderRadius: "999px",
                      fontSize: "12.5px",
                      fontWeight: 500,
                      border: selected ? "1px solid var(--color-maroon)" : "1px solid var(--border-card)",
                      backgroundColor: selected ? "var(--color-maroon)" : "#FFFFFF",
                      color: selected ? "#FFFFFF" : "var(--color-text-main)",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {selected && <Check size={12} />}
                    <span>{srv}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div className="form-group">
            <label className="form-label">Any specific dish or request?</label>
            <textarea
              className="form-textarea"
              rows={2}
              placeholder="e.g. Jain food options, Live Dhokla counter, specific venue details..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Submit on WhatsApp */}
          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", padding: "14px", marginTop: "8px" }}
          >
            <WhatsAppIcon size={18} fill="#25D366" />
            <span>Send Details on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}

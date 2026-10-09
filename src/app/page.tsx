"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularOfferings from "@/components/PopularOfferings";
import MomentsBanner from "@/components/MomentsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWork, { GalleryItem } from "@/components/OurWork";
import HowToOrder from "@/components/HowToOrder";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import EventPlannerModal from "@/components/EventPlannerModal";
import MenuModal from "@/components/MenuModal";
import LightboxModal from "@/components/LightboxModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [preselectedOccasion, setPreselectedOccasion] = useState("");

  const handleOpenPlanner = (occasion: string = "") => {
    setPreselectedOccasion(occasion);
    setPlannerModalOpen(true);
  };

  const handleOpenWhatsAppDirect = (customText: string = "") => {
    const text = customText
      ? `Hi Pooja's Kitchen, I would like to inquire about: ${customText}`
      : "Hi Pooja's Kitchen, I would like to inquire about catering services for an upcoming event.";
    window.open(`https://wa.me/919833815423?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen">
      {/* 1. Navbar */}
      <Navbar onOpenOrderModal={() => handleOpenPlanner()} />

      {/* 2. Hero Section: "Good Food. Beautiful Gatherings." */}
      <HeroSection
        onPlanEvent={() => handleOpenPlanner()}
        onExploreMenu={() => setMenuModalOpen(true)}
      />

      {/* 3. "Our Popular Offerings" */}
      <PopularOfferings
        onSelectItem={(item) => handleOpenWhatsAppDirect(item.title)}
      />

      {/* 4. "We Cater, You Celebrate" Section */}
      <MomentsBanner onPlanEvent={() => handleOpenPlanner()} />

      {/* 5. "Why Choose Pooja's Kitchen?" Section */}
      <WhyChooseUs />

      {/* 6. "Our Work" Gallery Section */}
      <OurWork onImageClick={(item) => setLightboxItem(item)} />

      {/* 7. "How to Order" 4-Step Process */}
      <HowToOrder />

      {/* 8. "What Our Customers Say" Testimonials */}
      <CustomerTestimonials />

      {/* 9. Pre-Footer Banner ("Let's make your next gathering delicious. ♡") */}
      <PreFooterCTA onOpenOrderModal={() => handleOpenPlanner()} />

      {/* 10. Footer */}
      <Footer onOpenOrderModal={() => handleOpenPlanner()} />

      {/* Interactive Modals */}
      <EventPlannerModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        preselectedOccasion={preselectedOccasion}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onOrderDish={(dish) => {
          setMenuModalOpen(false);
          handleOpenWhatsAppDirect(`Dish: ${dish}`);
        }}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onInquire={(title) => {
          setLightboxItem(null);
          handleOpenWhatsAppDirect(`Gallery setup: ${title}`);
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}

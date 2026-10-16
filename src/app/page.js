"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import DiscountBanner from "@/components/DiscountBanner";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import VisitUs from "@/components/VisitUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  const router = useRouter();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Haircut & Styling");

  // Secret keyboard shortcut: Ctrl+Shift+A opens hidden admin
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        router.push("/admin");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const handleOpenBooking = (serviceName = "Haircut & Styling") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Global Discount Banner when active */}
      <DiscountBanner onOpenBooking={() => handleOpenBooking()} />

      {/* Top Header / Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Services Section */}
        <Services
          onSelectService={(service) => handleOpenBooking(service)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Gallery Section */}
        <Gallery />

        {/* About V.K Unisex Salon Section */}
        <About />

        {/* Visit Our Salon / Location & Info Section */}
        <VisitUs onOpenBooking={() => handleOpenBooking()} />

        {/* Customer Reviews Section */}
        <Reviews />
      </main>

      {/* Footer with discreet admin lock */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}

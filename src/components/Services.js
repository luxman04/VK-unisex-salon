"use client";

import Image from "next/image";
import { ArrowRight, Scissors, Sparkles, Smile, Droplets, Paintbrush, Heart, Star } from "lucide-react";
import { useServices } from "@/context/ServicesContext";
import styles from "./Services.module.css";

const iconMap = {
  Scissors: Scissors,
  Paintbrush: Paintbrush,
  Droplets: Droplets,
  Smile: Smile,
  Sparkles: Sparkles,
  Heart: Heart,
  Star: Star,
};

export default function Services({ onSelectService, onOpenBooking }) {
  const { services, getServicePricing } = useServices();

  const handleServiceClick = (service) => {
    onSelectService(service.title);
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.servicesHeaderRow}>
          <div className={styles.headerTextGroup}>
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="section-title">
              Hair &amp; Beauty <span className={styles.titleServicesHighlight}>Services</span>
            </h2>
            <p className="section-subtitle">
              Complete grooming solutions for men, women and everyone.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className={styles.viewAllBtn}
            type="button"
          >
            <span>View All Services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className={styles.cardsGrid}>
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Scissors;
            const pricing = getServicePricing(service);

            return (
              <div
                key={service.id}
                className={styles.serviceCard}
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(service);
                  }
                }}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={service.image || "/images/service-haircut.jpg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 180px"
                    className={styles.cardImage}
                  />
                  <div className={styles.iconBadge}>
                    <IconComponent size={20} strokeWidth={2.2} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>

                  {/* Price & Discount Display */}
                  <div className={styles.priceRow}>
                    <span className={styles.finalPrice}>₹{pricing.finalPrice}</span>
                    {pricing.hasDiscount && (
                      <>
                        <span className={styles.originalPrice}>₹{pricing.originalPrice}</span>
                        <span className={styles.discountBadge}>
                          {pricing.discountPercent}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <span className={styles.cardBookAction}>
                    Book Now <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { MapPin, Phone, Clock, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import styles from "./VisitUs.module.css";

export default function VisitUs({ onOpenBooking }) {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=V.K+Unisex+Salon+Tibba+Road+Ludhiana";

  return (
    <section id="contact" className={styles.visitSection}>
      <div className="container">
        <div className={styles.visitCard}>
          <div className={styles.cardGlow} />

          {/* Left Column: Heading, description, CTA */}
          <div className={styles.leftCol}>
            <div className={styles.pinIconBox}>
              <MapPin size={28} strokeWidth={2.4} />
            </div>

            <h2 className={styles.visitTitle}>Visit Our Salon</h2>

            <p className={styles.visitDesc}>
              We are located at Tibba Road, Ludhiana. Come and experience professional
              hair &amp; beauty care in a comfortable and friendly environment.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.getDirectionsBtn}
            >
              <span>Get Directions</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Middle Column: Interactive Styled Map Preview */}
          <div className={styles.middleCol}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapPreviewCard}
              title="Click to open Google Maps"
            >
              <div className={styles.mapGridVisual} />

              <div className={styles.mapPinBadge}>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-coral)",
                  }}
                />
                <span>V.K Unisex Salon</span>
              </div>

              <div className={styles.mapLocationBar}>
                <MapPin size={14} color="var(--accent-coral)" />
                <span>Tibba Road, Ludhiana</span>
                <ExternalLink size={12} style={{ marginLeft: "auto", opacity: 0.7 }} />
              </div>
            </a>
          </div>

          {/* Right Column: Contact info, hours, appointment */}
          <div className={styles.rightCol}>
            {/* Phone */}
            <a href="tel:+919872265230" className={styles.contactItem}>
              <div className={styles.contactIconCircle}>
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div className={styles.contactTexts}>
                <span className={styles.contactMainText}>+91 98722 65230</span>
                <span className={styles.contactSubText}>Call or WhatsApp</span>
              </div>
            </a>

            {/* Operating Hours */}
            <div className={styles.contactItem}>
              <div className={styles.contactIconCircle}>
                <Clock size={20} strokeWidth={2.2} />
              </div>
              <div className={styles.contactTexts}>
                <span className={styles.contactMainText}>Open Today</span>
                <span className={styles.contactSubText}>10:00 AM – 11:00 PM</span>
              </div>
            </div>

            {/* Book Appointment / Walk-ins */}
            <div
              className={styles.contactItem}
              onClick={() => onOpenBooking()}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onOpenBooking();
                }
              }}
            >
              <div className={styles.contactIconCircle}>
                <Calendar size={20} strokeWidth={2.2} />
              </div>
              <div className={styles.contactTexts}>
                <span className={styles.contactMainText}>Book Appointment</span>
                <span className={styles.contactSubText}>Walk-ins also welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

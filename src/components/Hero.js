"use client";

import Image from "next/image";
import { Calendar, ArrowRight, Users, Sparkles, ShieldCheck } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero({ onOpenBooking }) {
  const handleViewServices = (e) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroBackdropWave} />

      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Heading, Subtitle, CTAs & Features */}
        <div className={styles.heroContent}>
          <div className={styles.taglineBadge}>
            <span>LOOK GOOD</span>
            <span className={styles.taglineDot} />
            <span>FEEL GREAT</span>
          </div>

          <h1 className={styles.mainTitle}>V.K Unisex Salon</h1>

          <div className={styles.secondaryTitle}>
            <span>Style</span>
            <span className={styles.cursiveCare}>Care</span>
            <span>Confidence</span>
          </div>

          <p className={styles.heroDescription}>
            Professional hair, beauty and grooming services for men, women and everyone.
          </p>

          <div className={styles.ctaGroup}>
            <button
              onClick={() => onOpenBooking()}
              className={styles.heroPrimaryBtn}
              type="button"
            >
              <Calendar size={18} strokeWidth={2.2} />
              <span>Book an Appointment</span>
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>

            <button
              onClick={handleViewServices}
              className={styles.heroSecondaryBtn}
              type="button"
            >
              <span>View Services</span>
            </button>
          </div>

          <div className={styles.featureBadges}>
            <div className={styles.badgeItem}>
              <div className={styles.badgeIconBox}>
                <Users size={18} strokeWidth={2.2} />
              </div>
              <span className={styles.badgeText}>
                Unisex Salon<br />for Everyone
              </span>
            </div>

            <div className={styles.badgeItem}>
              <div className={styles.badgeIconBox}>
                <ShieldCheck size={18} strokeWidth={2.2} />
              </div>
              <span className={styles.badgeText}>
                Hygienic<br />&amp; Safe
              </span>
            </div>

            <div className={styles.badgeItem}>
              <div className={styles.badgeIconBox}>
                <Sparkles size={18} strokeWidth={2.2} />
              </div>
              <span className={styles.badgeText}>
                Modern<br />Styling
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Model Photography & Floating Badge */}
        <div className={styles.heroVisualWrapper}>
          <div className={styles.visualShapeBg} />

          <div className={styles.heroImageFrame}>
            <Image
              src="/images/hero-model.jpg"
              alt="Stylish modern haircut at V.K Unisex Salon"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className={styles.heroImage}
            />

            {/* Floating Cursive Badge: Good Hair Brighter You */}
            <div className={styles.cursiveOverlayBadge}>
              <span className={styles.cursiveText}>Good Hair</span>
              <span className={styles.cursiveText} style={{ marginRight: "14px" }}>
                Brighter You
              </span>
              <svg
                className={styles.cursiveCurveSvg}
                viewBox="0 0 100 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 14C35 22 75 20 95 6"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

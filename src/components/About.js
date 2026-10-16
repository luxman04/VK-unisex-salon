"use client";

import Image from "next/image";
import { Users, Star, Heart, MapPin, Scissors } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutGrid}`}>
        {/* Left Column: Heading, Story & 4 Feature Badges */}
        <div className={styles.aboutContent}>
          <span className="section-tag">ABOUT V.K UNISEX SALON</span>
          <h2 className={styles.aboutTitle}>More Than Just a Salon</h2>

          <p className={styles.aboutDesc}>
            <strong>V.K Unisex Salon</strong> is your local beauty and grooming destination
            in Tibba Road, Ludhiana. We offer professional hair, beauty and grooming services
            for men, women and everyone, with a focus on style, hygiene and customer satisfaction.
          </p>

          <div className={styles.statsRow}>
            {/* Stat 1: 500+ Happy Clients */}
            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <Users size={20} />
              </div>
              <div className={styles.statTextBox}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>

            {/* Stat 2: 5.0 Google Rating */}
            <div className={styles.statCard}>
              <div className={styles.statIconBox} style={{ color: "#f59e0b" }}>
                <Star size={20} fill="#f59e0b" />
              </div>
              <div className={styles.statTextBox}>
                <span className={styles.statNumber}>5.0</span>
                <span className={styles.statLabel}>Google Rating</span>
              </div>
            </div>

            {/* Stat 3: Clean & Hygienic */}
            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <Heart size={20} />
              </div>
              <div className={styles.statTextBox}>
                <span className={styles.statNumber} style={{ fontSize: "0.95rem" }}>
                  Clean &amp;
                </span>
                <span className={styles.statLabel}>Hygienic</span>
              </div>
            </div>

            {/* Stat 4: Convenient Location */}
            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <MapPin size={20} />
              </div>
              <div className={styles.statTextBox}>
                <span className={styles.statNumber} style={{ fontSize: "0.92rem" }}>
                  Convenient
                </span>
                <span className={styles.statLabel}>Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Salon Photography & Floating Badge */}
        <div className={styles.aboutVisualWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/salon-interior.jpg"
              alt="V.K Unisex Salon interior at Tibba Road Ludhiana"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className={styles.aboutImage}
            />

            {/* Floating Peach Badge */}
            <div className={styles.floatingSetupBadge}>
              <Scissors className={styles.badgeScissors} />
              <div className={styles.badgeSetupText}>
                <span className={styles.badgePrimaryText}>Modern Setup</span>
                <span className={styles.badgeSecondaryText}>Comfortable Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

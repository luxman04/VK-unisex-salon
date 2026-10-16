"use client";

import { Star, MessageSquare } from "lucide-react";
import styles from "./Reviews.module.css";

const clientReviews = [
  {
    id: 1,
    name: "Gurpreet Singh",
    service: "Haircut & Beard Grooming",
    initials: "GS",
    rating: 5,
    text: "Best salon on Tibba Road, Ludhiana! The barber gave me an exact modern taper fade and beard trim just like I wanted. Clean premises, sanitized scissors, and very polite staff.",
  },
  {
    id: 2,
    name: "Simran Kaur",
    service: "Keratin & Smoothing Treatment",
    initials: "SK",
    rating: 5,
    text: "Got keratin smoothing done at V.K Unisex Salon. My hair feels so soft, silky and completely frizz-free! Reasonable pricing compared to mall salons and super attentive service.",
  },
  {
    id: 3,
    name: "Aman Sharma",
    service: "Hair Spa & Facial Care",
    initials: "AS",
    rating: 5,
    text: "Regular client for hair spa and skin rejuvenation facials. The head massage is pure relaxation after a long work day. Highly recommend to anyone living in Ludhiana!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className="container">
        <div className={styles.reviewsHeaderRow}>
          <div className={styles.ratingBadge}>
            <div className={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" />
              ))}
            </div>
            <span className={styles.ratingScore}>5.0 on Google Reviews</span>
          </div>

          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Read real experiences from men and women who trust V.K Unisex Salon for their styling and grooming.
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {clientReviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div>
                <div className={styles.starsRow} style={{ marginBottom: "12px" }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>
                <p className={styles.quoteText}>&ldquo;{review.text}&rdquo;</p>
              </div>

              <div className={styles.clientInfoRow}>
                <div className={styles.clientAvatar}>{review.initials}</div>
                <div className={styles.clientDetails}>
                  <span className={styles.clientName}>{review.name}</span>
                  <span className={styles.clientService}>{review.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomReviewCta}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=V.K+Unisex+Salon+Tibba+Road+Ludhiana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageSquare size={16} />
            <span>Leave a Google Review</span>
          </a>
        </div>
      </div>
    </section>
  );
}

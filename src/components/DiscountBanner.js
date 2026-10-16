"use client";

import { useServices } from "@/context/ServicesContext";
import styles from "./DiscountBanner.module.css";

export default function DiscountBanner({ onOpenBooking }) {
  const { globalSettings } = useServices();

  if (!globalSettings?.globalDiscountActive) return null;

  return (
    <div className={styles.banner}>
      <span className={styles.bannerText}>
        {globalSettings.discountBannerText ||
          `Special Offer: Get ${globalSettings.globalDiscountPercent}% OFF on all services today!`}
      </span>
      <button
        onClick={() => onOpenBooking()}
        className={styles.bannerBtn}
        type="button"
      >
        Claim Discount
      </button>
    </div>
  );
}

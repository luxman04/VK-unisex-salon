"use client";

import { Phone, Calendar } from "lucide-react";
import styles from "./MobileBottomBar.module.css";

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className={styles.bottomBar}>
      <a href="tel:+919872265230" className={`${styles.actionBtn} ${styles.callBtn}`}>
        <Phone size={16} />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919872265230?text=Hello%20V.K%20Unisex%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.actionBtn} ${styles.whatsappBtn}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.11-.061-.598-.2-1.396-.583-2.39-1.579-1.31-1.314-1.742-2.397-1.923-2.827-.181-.43-.018-.663.097-.778.105-.104.233-.267.35-.404.118-.138.156-.233.235-.39.078-.158.039-.297-.02-.416-.058-.119-.526-1.267-.721-1.734-.19-.456-.385-.394-.526-.402-.135-.008-.291-.01-.447-.01s-.41.059-.624.293c-.214.234-.818.8-.818 1.95 0 1.15.838 2.262.955 2.418.117.156 1.624 2.48 3.935 3.477.55.238.979.38 1.313.486.552.176 1.054.151 1.451.092.443-.066 1.363-.557 1.556-1.094.194-.537.194-.997.136-1.094-.058-.097-.214-.156-.448-.273z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.63 0-3.14-.492-4.407-1.332l-.316-.21-2.955.826.836-2.884-.233-.335A8.026 8.026 0 014 12c0-4.439 3.561-8 8-8s8 3.561 8 8-3.561 8.05-8 8.05z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      <button
        onClick={() => onOpenBooking()}
        className={`${styles.actionBtn} ${styles.bookBtn}`}
        type="button"
      >
        <Calendar size={16} />
        <span>Book Slot</span>
      </button>
    </div>
  );
}

"use client";

import { Scissors, Lock } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMainRow}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className={styles.logoWrapper}
          >
            <div className={styles.logoTopRow}>
              <span className={styles.logoBrand}>V.K</span>
              <Scissors className={styles.logoScissorsIcon} strokeWidth={2.2} />
            </div>
            <span className={styles.logoTagline}>Unisex Salon</span>
          </a>

          {/* Navigation Links */}
          <nav className={styles.footerNav}>
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className={styles.footerNavLink}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, "#about")}
              className={styles.footerNavLink}
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "#services")}
              className={styles.footerNavLink}
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleScrollTo(e, "#gallery")}
              className={styles.footerNavLink}
            >
              Gallery
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleScrollTo(e, "#reviews")}
              className={styles.footerNavLink}
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className={styles.footerNavLink}
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className={styles.socialLinks}>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow V.K Unisex Salon on Instagram"
              className={styles.socialIconBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow V.K Unisex Salon on Facebook"
              className={styles.socialIconBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919872265230?text=Hello%20V.K%20Unisex%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={styles.socialIconBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.11-.061-.598-.2-1.396-.583-2.39-1.579-1.31-1.314-1.742-2.397-1.923-2.827-.181-.43-.018-.663.097-.778.105-.104.233-.267.35-.404.118-.138.156-.233.235-.39.078-.158.039-.297-.02-.416-.058-.119-.526-1.267-.721-1.734-.19-.456-.385-.394-.526-.402-.135-.008-.291-.01-.447-.01s-.41.059-.624.293c-.214.234-.818.8-.818 1.95 0 1.15.838 2.262.955 2.418.117.156 1.624 2.48 3.935 3.477.55.238.979.38 1.313.486.552.176 1.054.151 1.451.092.443-.066 1.363-.557 1.556-1.094.194-.537.194-.997.136-1.094-.058-.097-.214-.156-.448-.273z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.63 0-3.14-.492-4.407-1.332l-.316-.21-2.955.826.836-2.884-.233-.335A8.026 8.026 0 014 12c0-4.439 3.561-8 8-8s8 3.561 8 8-3.561 8.05-8 8.05z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Hours */}
        <div className={styles.footerBottomBar}>
          <p>© 2026 V.K Unisex Salon. All rights reserved.</p>
          <div className={styles.footerCredits}>
            <span>Tibba Road, Ludhiana</span>
            <span>•</span>
            <span>10:00 AM – 11:00 PM</span>
            <span>•</span>
            <a href="tel:+919872265230" style={{ color: "var(--primary-teal)", fontWeight: 600 }}>
              +91 98722 65230
            </a>
            <a
              href="/admin"
              className={styles.adminSecretLink}
              title="Staff / Admin Portal (Hidden)"
              aria-label="Admin Portal"
            >
              <Lock size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

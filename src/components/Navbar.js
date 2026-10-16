"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, Menu, X, Scissors, Clock } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "gallery", "reviews", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className={styles.logoLink}>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTopRow}>
                <span className={styles.logoBrand}>V.K</span>
                <Scissors className={styles.logoScissorsIcon} strokeWidth={2.2} />
              </div>
              <span className={styles.logoTagline}>Unisex Salon</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className={styles.actionsWrapper}>
            <a href="tel:+919872265230" className={styles.phonePill} title="Call V.K Unisex Salon">
              <span className={styles.phoneIconCircle}>
                <Phone size={13} strokeWidth={2.5} />
              </span>
              <span>+91 98722 65230</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className={styles.bookBtn}
              type="button"
              aria-label="Book an Appointment"
            >
              <Calendar size={15} strokeWidth={2.2} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              type="button"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      <div
        className={`${styles.drawerBackdrop} ${mobileMenuOpen ? styles.drawerBackdropOpen : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.logoTextWrapper}>
            <div className={styles.logoTopRow}>
              <span className={styles.logoBrand}>V.K</span>
              <Scissors className={styles.logoScissorsIcon} strokeWidth={2.2} />
            </div>
            <span className={styles.logoTagline}>Unisex Salon</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ padding: "6px" }}
          >
            <X size={22} />
          </button>
        </div>

        <div className={styles.drawerNavLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={styles.drawerLink}
            >
              <span>{link.name}</span>
              <span style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>›</span>
            </a>
          ))}
        </div>

        <div className={styles.drawerActions}>
          <a href="tel:+919872265230" className={styles.drawerPhone}>
            <Phone size={16} />
            <span>+91 98722 65230</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className={styles.drawerBookBtn}
            type="button"
          >
            <Calendar size={18} />
            <span>Book Appointment</span>
          </button>

          <div className={styles.drawerTiming}>
            <Clock size={14} style={{ display: "inline-block", marginRight: "6px" }} />
            <span>Open Today: 10:00 AM – 11:00 PM</span>
            <br />
            <span>Tibba Road, Ludhiana</span>
          </div>
        </div>
      </div>
    </>
  );
}

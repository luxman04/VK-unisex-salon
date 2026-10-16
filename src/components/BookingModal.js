"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Calendar, Clock, Phone, Sparkles, User } from "lucide-react";
import { useServices } from "@/context/ServicesContext";
import styles from "./BookingModal.module.css";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
  "07:00 PM",
  "08:30 PM",
];

export default function BookingModal({ isOpen, onClose, preselectedService }) {
  const { services, getServicePricing } = useServices();
  const [service, setService] = useState(preselectedService || (services[0]?.title || "Haircut & Styling"));
  const [gender, setGender] = useState("Men");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:30 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    } else if (services.length > 0 && !service) {
      setService(services[0].title);
    }
    // Set default date to today in YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, [preselectedService, isOpen, services, service]);

  if (!isOpen) return null;

  const currentServiceObj = services.find((s) => s.title === service) || services[0];
  const pricing = currentServiceObj ? getServicePricing(currentServiceObj) : null;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and phone number to continue.");
      return;
    }

    const priceText = pricing ? `₹${pricing.finalPrice} (${pricing.hasDiscount ? `${pricing.discountPercent}% Discount applied` : "Standard"})` : "TBD";

    const message = `Hello V.K Unisex Salon!%0A%0A*New Appointment Booking Request:*%0A• *Client Name:* ${encodeURIComponent(name)}%0A• *Phone:* ${encodeURIComponent(phone)}%0A• *Service:* ${encodeURIComponent(service)}%0A• *Price:* ${encodeURIComponent(priceText)}%0A• *Category:* ${encodeURIComponent(gender)}%0A• *Date:* ${encodeURIComponent(date)}%0A• *Time Slot:* ${encodeURIComponent(time)}%0A${notes ? `• *Special Notes:* ${encodeURIComponent(notes)}%0A` : ""}%0APlease confirm my booking at Tibba Road, Ludhiana salon. Thank you!`;

    window.open(`https://wa.me/919872265230?text=${message}`, "_blank");
    setIsSuccess(true);
  };

  const handleDirectBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and phone number to continue.");
      return;
    }
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleReset}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <div className={styles.successContainer}>
            <div className={styles.successIconBox}>
              <CheckCircle size={40} />
            </div>
            <h3 className={styles.successTitle}>Booking Request Received!</h3>
            <p style={{ color: "var(--text-body)", fontSize: "0.95rem" }}>
              Thank you, <strong>{name}</strong>! We look forward to welcoming you at
              <strong> V.K Unisex Salon</strong>.
            </p>

            <div className={styles.successDetailsCard}>
              <div className={styles.detailRow}>
                <span style={{ color: "var(--text-muted)" }}>Service:</span>
                <strong>{service}</strong>
              </div>
              {pricing && (
                <div className={styles.detailRow}>
                  <span style={{ color: "var(--text-muted)" }}>Estimated Price:</span>
                  <strong style={{ color: "var(--primary-teal)" }}>
                    ₹{pricing.finalPrice}{" "}
                    {pricing.hasDiscount && (
                      <span style={{ color: "var(--accent-coral)", fontSize: "0.82rem" }}>
                        ({pricing.discountPercent}% OFF)
                      </span>
                    )}
                  </strong>
                </div>
              )}
              <div className={styles.detailRow}>
                <span style={{ color: "var(--text-muted)" }}>Date &amp; Time:</span>
                <strong>{date} at {time}</strong>
              </div>
              <div className={styles.detailRow}>
                <span style={{ color: "var(--text-muted)" }}>Client:</span>
                <span>{name} ({gender})</span>
              </div>
              <div className={styles.detailRow}>
                <span style={{ color: "var(--text-muted)" }}>Contact:</span>
                <span>{phone}</span>
              </div>
              <div className={styles.detailRow}>
                <span style={{ color: "var(--text-muted)" }}>Location:</span>
                <span>Tibba Road, Ludhiana</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", width: "100%" }}>
              <button
                onClick={handleReset}
                className="btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
                type="button"
              >
                Done
              </button>
              <a
                href="tel:+919872265230"
                className="btn-outline"
                style={{ flex: 1, justifyContent: "center" }}
              >
                Call Salon
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <span className={styles.modalBadge}>V.K UNISEX SALON</span>
                <h3 className={styles.modalTitle}>Book an Appointment</h3>
              </div>
              <button
                onClick={onClose}
                className={styles.closeBtn}
                aria-label="Close modal"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleDirectBooking}>
              <div className={styles.modalBody}>
                {/* Category Pills: Men / Women / Kids */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>For Whom:</label>
                  <div className={styles.pillsRow}>
                    {["Men", "Women", "Kids", "Couple / Family"].map((g) => (
                      <button
                        type="button"
                        key={g}
                        className={`${styles.pillOption} ${
                          gender === g ? styles.pillOptionSelected : ""
                        }`}
                        onClick={() => setGender(g)}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div className={styles.formGroup}>
                  <label htmlFor="service-select" className={styles.label}>
                    Select Service:
                  </label>
                  <select
                    id="service-select"
                    className={styles.select}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {services.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title} (₹{item.price})
                      </option>
                    ))}
                  </select>

                  {/* Pricing feedback */}
                  {pricing && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                      <span style={{ fontWeight: 800, color: "var(--primary-teal)", fontSize: "1.05rem" }}>
                        Price: ₹{pricing.finalPrice}
                      </span>
                      {pricing.hasDiscount && (
                        <>
                          <span style={{ textDecoration: "line-through", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                            ₹{pricing.originalPrice}
                          </span>
                          <span style={{ background: "#feebe7", color: "var(--accent-coral)", fontSize: "0.74rem", fontWeight: 800, padding: "2px 8px", borderRadius: "999px" }}>
                            {pricing.discountPercent}% OFF
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Date & Time */}
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="booking-date" className={styles.label}>
                      Preferred Date:
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      className={styles.input}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Time Slot:</label>
                    <div className={styles.timeSlotsGrid}>
                      {timeSlots.slice(0, 4).map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          className={`${styles.timeSlotBtn} ${
                            time === slot ? styles.timeSlotBtnSelected : ""
                          }`}
                          onClick={() => setTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* More Time Slots row */}
                <div className={styles.formGroup}>
                  <div className={styles.timeSlotsGrid}>
                    {timeSlots.slice(4).map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        className={`${styles.timeSlotBtn} ${
                          time === slot ? styles.timeSlotBtnSelected : ""
                        }`}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="client-name" className={styles.label}>
                      Your Name:
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="client-phone" className={styles.label}>
                      Phone Number:
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className={styles.formGroup}>
                  <label htmlFor="client-notes" className={styles.label}>
                    Special Requests or Notes (Optional):
                  </label>
                  <textarea
                    id="client-notes"
                    rows={2}
                    className={styles.textarea}
                    placeholder="Specific styling request, stylist preference, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.modalFooter}>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className={styles.whatsappSubmitBtn}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.11-.061-.598-.2-1.396-.583-2.39-1.579-1.31-1.314-1.742-2.397-1.923-2.827-.181-.43-.018-.663.097-.778.105-.104.233-.267.35-.404.118-.138.156-.233.235-.39.078-.158.039-.297-.02-.416-.058-.119-.526-1.267-.721-1.734-.19-.456-.385-.394-.526-.402-.135-.008-.291-.01-.447-.01s-.41.059-.624.293c-.214.234-.818.8-.818 1.95 0 1.15.838 2.262.955 2.418.117.156 1.624 2.48 3.935 3.477.55.238.979.38 1.313.486.552.176 1.054.151 1.451.092.443-.066 1.363-.557 1.556-1.094.194-.537.194-.997.136-1.094-.058-.097-.214-.156-.448-.273z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.63 0-3.14-.492-4.407-1.332l-.316-.21-2.955.826.836-2.884-.233-.335A8.026 8.026 0 014 12c0-4.439 3.561-8 8-8s8 3.561 8 8-3.561 8.05-8 8.05z" />
                  </svg>
                  <span>Confirm &amp; Book via WhatsApp</span>
                </button>

                <button type="submit" className={styles.directSubmitBtn}>
                  <Calendar size={18} />
                  <span>Instant Reservation</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

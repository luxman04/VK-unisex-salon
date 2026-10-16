"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  Unlock,
  Check,
  Plus,
  Trash2,
  Image as ImageIcon,
  RotateCcw,
  ExternalLink,
  Tag,
  Scissors,
  Sparkles,
  Smile,
  Droplets,
  Paintbrush,
  Heart,
  Star,
  LogOut,
  Upload,
} from "lucide-react";
import { useServices } from "@/context/ServicesContext";
import styles from "./admin.module.css";

const presetImages = [
  { label: "Haircut", src: "/images/service-haircut.jpg" },
  { label: "Colouring", src: "/images/service-colouring.jpg" },
  { label: "Hair Spa", src: "/images/service-spa.jpg" },
  { label: "Beard Trim", src: "/images/service-beard.jpg" },
  { label: "Facial Care", src: "/images/service-facial.jpg" },
  { label: "Keratin", src: "/images/service-keratin.jpg" },
  { label: "Bridal Hair", src: "/images/gallery-2.jpg" },
  { label: "Indian Bride", src: "/images/gallery-6.jpg" },
  { label: "Salon Interior", src: "/images/salon-interior.jpg" },
  { label: "Product Shelf", src: "/images/gallery-4.jpg" },
];

const iconOptions = ["Scissors", "Paintbrush", "Droplets", "Smile", "Sparkles", "Heart", "Star"];

export default function AdminPage() {
  const {
    services,
    globalSettings,
    updateService,
    addService,
    deleteService,
    saveSettings,
    resetToDefaults,
  } = useServices();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  // Image picker modal state
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [currentEditingServiceId, setCurrentEditingServiceId] = useState(null);
  const [customImageUrl, setCustomImageUrl] = useState("");

  // New service modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newServiceData, setNewServiceData] = useState({
    title: "",
    description: "",
    price: 500,
    discountPercent: 10,
    image: "/images/service-haircut.jpg",
    iconName: "Scissors",
  });

  useEffect(() => {
    // Check session
    const authStatus = sessionStorage.getItem("vk_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === "admin123" || passwordInput === "vkadmin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("vk_admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Incorrect password. Please try 'admin123'");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("vk_admin_auth");
    setPasswordInput("");
  };

  // Global Discount Toggles
  const handleToggleGlobalDiscount = () => {
    const nextState = !globalSettings.globalDiscountActive;
    saveSettings({
      ...globalSettings,
      globalDiscountActive: nextState,
    });
    showToast(
      nextState
        ? `Global ${globalSettings.globalDiscountPercent}% discount applied to ALL services!`
        : "Global discount turned OFF."
    );
  };

  const handleSetGlobalDiscountPercent = (percent) => {
    saveSettings({
      ...globalSettings,
      globalDiscountPercent: Number(percent),
    });
    showToast(`Global discount updated to ${percent}% OFF!`);
  };

  const handleSetBannerText = (text) => {
    saveSettings({
      ...globalSettings,
      discountBannerText: text,
    });
  };

  // Open Image Picker
  const handleOpenImagePicker = (serviceId) => {
    setCurrentEditingServiceId(serviceId);
    setCustomImageUrl("");
    setIsImagePickerOpen(true);
  };

  const handleSelectPresetImage = (imageSrc) => {
    if (currentEditingServiceId === "NEW") {
      setNewServiceData({ ...newServiceData, image: imageSrc });
    } else if (currentEditingServiceId) {
      updateService(currentEditingServiceId, { image: imageSrc });
      showToast("Service image updated!");
    }
    setIsImagePickerOpen(false);
  };

  const handleApplyCustomImageUrl = () => {
    if (!customImageUrl.trim()) return;
    if (currentEditingServiceId === "NEW") {
      setNewServiceData({ ...newServiceData, image: customImageUrl.trim() });
    } else if (currentEditingServiceId) {
      updateService(currentEditingServiceId, { image: customImageUrl.trim() });
      showToast("Custom image URL applied!");
    }
    setIsImagePickerOpen(false);
  };

  // Local file upload support
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (currentEditingServiceId === "NEW") {
          setNewServiceData({ ...newServiceData, image: dataUrl });
        } else if (currentEditingServiceId) {
          updateService(currentEditingServiceId, { image: dataUrl });
          showToast("Uploaded photo applied to service!");
        }
        setIsImagePickerOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Service Form
  const handleCreateNewService = (e) => {
    e.preventDefault();
    if (!newServiceData.title.trim()) {
      alert("Please enter a service title");
      return;
    }
    addService(newServiceData);
    setIsAddModalOpen(false);
    setNewServiceData({
      title: "",
      description: "",
      price: 500,
      discountPercent: 10,
      image: "/images/service-haircut.jpg",
      iconName: "Scissors",
    });
    showToast("New service added successfully!");
  };

  // Reset confirmation
  const handleResetDefaults = () => {
    if (
      window.confirm(
        "Are you sure you want to restore all original services, images, and prices to factory defaults?"
      )
    ) {
      resetToDefaults();
      showToast("All services restored to default!");
    }
  };

  // Unauthenticated Login View
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginIconBox}>
            <Lock size={32} />
          </div>
          <h1 className={styles.loginTitle}>Admin Portal</h1>
          <p className={styles.loginSubtitle}>
            V.K Unisex Salon • Manage services, edit titles &amp; images, set prices, and control store-wide discounts.
          </p>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              className={styles.loginInput}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              autoFocus
            />

            {loginError && (
              <p style={{ color: "#ef4444", fontSize: "0.85rem", fontWeight: 600 }}>
                {loginError}
              </p>
            )}

            <button type="submit" className={styles.loginBtn}>
              <Unlock size={18} />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <p className={styles.loginHint}>
            Default Password: <code style={{ fontWeight: "bold" }}>admin123</code>
          </p>
          <div style={{ marginTop: "18px" }}>
            <Link
              href="/"
              style={{ fontSize: "0.85rem", color: "var(--primary-teal)", fontWeight: 600 }}
            >
              ← Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminWrapper}>
      {/* Admin Top Navigation Bar */}
      <header className={styles.adminTopBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.adminBrand}>
            <span className={styles.adminLogoTitle}>V.K Unisex Salon</span>
            <span className={styles.adminBadge}>Admin Dashboard</span>
          </div>

          <div className={styles.topBarActions}>
            <Link href="/" target="_blank" className={styles.btnSecondaryLight}>
              <ExternalLink size={15} />
              <span>Live Website</span>
            </Link>

            <button
              onClick={handleResetDefaults}
              className={styles.btnSecondaryLight}
              type="button"
              title="Reset all services and prices to initial state"
            >
              <RotateCcw size={15} />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleLogout}
              className={styles.btnSecondaryLight}
              type="button"
              style={{ background: "rgba(239, 68, 68, 0.25)", borderColor: "rgba(239, 68, 68, 0.5)" }}
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className={styles.mainContainer}>
        {/* =========================================
            SECTION 1: GLOBAL STORE-WIDE DISCOUNT CONTROLLER
            ========================================= */}
        <section className={styles.discountControlCard}>
          <div className={styles.cardTopHeader}>
            <div className={styles.discountTitleGroup}>
              <div className={styles.discountIconBox}>
                <Tag size={24} />
              </div>
              <div>
                <h2 className={styles.discountHeading}>Store-wide Discount Controller</h2>
                <p className={styles.discountDesc}>
                  Give a discount across ALL salon services at once with a single switch.
                </p>
              </div>
            </div>

            {/* Main Toggle Switch */}
            <label className={styles.toggleLabel}>
              <span
                className={styles.switchStatusText}
                style={{
                  color: globalSettings.globalDiscountActive ? "var(--accent-coral)" : "var(--text-muted)",
                }}
              >
                {globalSettings.globalDiscountActive
                  ? `Active (${globalSettings.globalDiscountPercent}% OFF ALL)`
                  : "Disabled"}
              </span>
              <div className={styles.switch}>
                <input
                  type="checkbox"
                  checked={globalSettings.globalDiscountActive}
                  onChange={handleToggleGlobalDiscount}
                />
                <span className={styles.slider} />
              </div>
            </label>
          </div>

          {/* Controls when global discount is configured */}
          <div className={styles.discountFieldsGrid}>
            <div>
              <label className={styles.fieldLabel}>Global Discount Percentage (%):</label>
              <input
                type="number"
                min="1"
                max="90"
                value={globalSettings.globalDiscountPercent}
                onChange={(e) => handleSetGlobalDiscountPercent(e.target.value)}
                className={styles.textInput}
                style={{ fontSize: "1.1rem", fontWeight: 800 }}
              />

              <div className={styles.discountPresetsRow}>
                {[10, 15, 20, 25, 30, 50].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => handleSetGlobalDiscountPercent(pct)}
                    className={`${styles.presetBtn} ${
                      globalSettings.globalDiscountPercent === pct ? styles.presetBtnActive : ""
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={styles.fieldLabel}>Top Announcement Banner Text:</label>
              <input
                type="text"
                value={globalSettings.discountBannerText}
                onChange={(e) => handleSetBannerText(e.target.value)}
                placeholder="e.g. Special Offer: 20% OFF on All Services at V.K Unisex Salon!"
                className={styles.textInput}
              />
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "6px" }}>
                This banner will automatically display at the very top of the homepage when the discount is enabled.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: SERVICES LIST & FULL EDITOR
            ========================================= */}
        <section>
          <div className={styles.servicesSectionHeader} style={{ marginBottom: "20px" }}>
            <div>
              <h2 className={styles.sectionTitle}>Manage Salon Services ({services.length})</h2>
              <p style={{ color: "var(--text-body)", fontSize: "0.9rem" }}>
                Update service photo, title, price, individual discount, and description.
              </p>
            </div>

            <div className={styles.headerButtonGroup}>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="btn-primary"
                type="button"
                style={{ padding: "10px 22px" }}
              >
                <Plus size={18} />
                <span>Add New Service</span>
              </button>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const effectiveDiscount = globalSettings.globalDiscountActive
                ? globalSettings.globalDiscountPercent
                : service.discountPercent || 0;
              const discountedPrice = Math.round(
                service.price - (service.price * effectiveDiscount) / 100
              );

              return (
                <div key={service.id} className={styles.serviceEditCard}>
                  {/* Card Header: Thumbnail & Title */}
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.serviceImgThumbWrapper}>
                      <Image
                        src={service.image || "/images/service-haircut.jpg"}
                        alt={service.title}
                        fill
                        className={styles.serviceImgThumb}
                      />
                    </div>

                    <div className={styles.cardHeaderDetails}>
                      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                      <div className={styles.serviceCardPriceTag}>
                        <span className={styles.badgePrice}>₹{discountedPrice}</span>
                        {effectiveDiscount > 0 && (
                          <>
                            <span style={{ textDecoration: "line-through", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                              ₹{service.price}
                            </span>
                            <span
                              style={{
                                background: "#feebe7",
                                color: "var(--accent-coral)",
                                fontSize: "0.72rem",
                                fontWeight: 800,
                                padding: "2px 6px",
                                borderRadius: "4px",
                              }}
                            >
                              {effectiveDiscount}% OFF {globalSettings.globalDiscountActive ? "(Global)" : ""}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenImagePicker(service.id)}
                      className={styles.btnSecondaryLight}
                      style={{ color: "var(--primary-teal)", background: "var(--accent-mint)", borderColor: "var(--primary-teal)" }}
                      type="button"
                      title="Change Image"
                    >
                      <ImageIcon size={14} />
                      <span>Change</span>
                    </button>
                  </div>

                  {/* Editable Inputs: Title */}
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Service Title:</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                        updateService(service.id, { title: e.target.value });
                        showToast("Title updated");
                      }}
                      className={styles.textInput}
                    />
                  </div>

                  {/* Two columns: Price and Individual Discount */}
                  <div className={styles.twoColFields}>
                    <div className={styles.fieldRow}>
                      <label className={styles.fieldLabel}>Original Price (₹):</label>
                      <input
                        type="number"
                        min="0"
                        value={service.price}
                        onChange={(e) => {
                          updateService(service.id, { price: Number(e.target.value) });
                          showToast("Price updated");
                        }}
                        className={styles.textInput}
                        style={{ fontWeight: "bold" }}
                      />
                    </div>

                    <div className={styles.fieldRow}>
                      <label className={styles.fieldLabel}>Custom Discount (%):</label>
                      <input
                        type="number"
                        min="0"
                        max="90"
                        value={service.discountPercent || 0}
                        onChange={(e) => {
                          updateService(service.id, { discountPercent: Number(e.target.value) });
                          showToast("Custom discount updated");
                        }}
                        disabled={globalSettings.globalDiscountActive}
                        className={styles.textInput}
                        title={
                          globalSettings.globalDiscountActive
                            ? "Global discount is active, overriding custom discount"
                            : ""
                        }
                      />
                    </div>
                  </div>

                  {/* Editable Description */}
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Description:</label>
                    <textarea
                      rows={2}
                      value={service.description}
                      onChange={(e) => {
                        updateService(service.id, { description: e.target.value });
                        showToast("Description updated");
                      }}
                      className={styles.textareaInput}
                    />
                  </div>

                  {/* Icon Selector */}
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Badge Icon:</label>
                    <select
                      value={service.iconName || "Scissors"}
                      onChange={(e) => {
                        updateService(service.id, { iconName: e.target.value });
                        showToast("Icon changed");
                      }}
                      className={styles.selectInput}
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bottom Actions */}
                  <div className={styles.serviceActionsRow}>
                    <span className={styles.statusIndicator}>✓ Live on website</span>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete service "${service.title}"?`)) {
                          deleteService(service.id);
                          showToast(`"${service.title}" removed.`);
                        }
                      }}
                      className={styles.deleteBtn}
                      type="button"
                    >
                      <Trash2 size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* =========================================
          MODAL: CHANGE / SELECT SERVICE IMAGE
          ========================================= */}
      {isImagePickerOpen && (
        <div className={styles.adminModalBackdrop} onClick={() => setIsImagePickerOpen(false)}>
          <div className={styles.adminModalCard} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800 }}>Choose Service Image</h3>
              <button
                onClick={() => setIsImagePickerOpen(false)}
                className={styles.btnSecondaryLight}
                style={{ color: "#333", border: "none", background: "#f1f1f1" }}
              >
                ✕
              </button>
            </div>

            <div>
              <label className={styles.fieldLabel}>Select From Salon Photos:</label>
              <div className={styles.presetImagesGrid}>
                {presetImages.map((preset) => (
                  <div
                    key={preset.src}
                    className={styles.presetImgOption}
                    onClick={() => handleSelectPresetImage(preset.src)}
                    title={preset.label}
                  >
                    <Image
                      src={preset.src}
                      alt={preset.label}
                      fill
                      className={styles.presetImgThumb}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "14px" }}>
              <label className={styles.fieldLabel}>Or Upload Photo From Device:</label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px",
                  border: "2px dashed var(--primary-teal)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: "var(--accent-mint)",
                  color: "var(--primary-teal)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  marginTop: "6px",
                }}
              >
                <Upload size={18} />
                <span>Choose Image File...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "14px" }}>
              <label className={styles.fieldLabel}>Or Enter Any Image URL:</label>
              <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  className={styles.textInput}
                />
                <button
                  type="button"
                  onClick={handleApplyCustomImageUrl}
                  className="btn-primary"
                  style={{ padding: "8px 18px", whiteSpace: "nowrap" }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          MODAL: ADD NEW SERVICE
          ========================================= */}
      {isAddModalOpen && (
        <div className={styles.adminModalBackdrop} onClick={() => setIsAddModalOpen(false)}>
          <div className={styles.adminModalCard} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800 }}>Add New Salon Service</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className={styles.btnSecondaryLight}
                style={{ color: "#333", border: "none", background: "#f1f1f1" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNewService} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Service Title:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Head Massage & Oil Therapy"
                  value={newServiceData.title}
                  onChange={(e) => setNewServiceData({ ...newServiceData, title: e.target.value })}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.twoColFields}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Price (₹):</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={newServiceData.price}
                    onChange={(e) => setNewServiceData({ ...newServiceData, price: e.target.value })}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Discount (%):</label>
                  <input
                    type="number"
                    min="0"
                    max="90"
                    value={newServiceData.discountPercent}
                    onChange={(e) => setNewServiceData({ ...newServiceData, discountPercent: e.target.value })}
                    className={styles.textInput}
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Description:</label>
                <textarea
                  rows={2}
                  placeholder="Short description of the grooming service"
                  value={newServiceData.description}
                  onChange={(e) => setNewServiceData({ ...newServiceData, description: e.target.value })}
                  className={styles.textareaInput}
                />
              </div>

              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Icon:</label>
                <select
                  value={newServiceData.iconName}
                  onChange={(e) => setNewServiceData({ ...newServiceData, iconName: e.target.value })}
                  className={styles.selectInput}
                >
                  {iconOptions.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Image:</label>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div className={styles.serviceImgThumbWrapper} style={{ width: "54px", height: "54px" }}>
                    <Image
                      src={newServiceData.image}
                      alt="New service preview"
                      fill
                      className={styles.serviceImgThumb}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenImagePicker("NEW")}
                    className="btn-outline"
                    style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                  >
                    Select Photo
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
              >
                Create Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Real-time Toast Feedback */}
      {toastMessage && (
        <div className={styles.toastNotification}>
          <Check size={18} color="#34d399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

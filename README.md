# V.K Unisex Salon — Next.js One-Page Website & Admin Portal

A modern, responsive, high-converting one-page website for **V.K Unisex Salon** (Tibba Road, Ludhiana) built with **Next.js 16 (App Router)**, Vanilla CSS Modules, and an interactive **Hidden Admin Dashboard**.

---

## ✨ Features

- **Hero Section**: Elegant typography (*Style Care Confidence*), trust badges, and model photography with cursive flourish (*Good Hair Brighter You*).
- **Hair & Beauty Services**:
  - Haircut & Styling
  - Hair Colouring
  - Hair Spa & Treatment
  - Beard Grooming
  - Facial & Skin Care
  - Keratin & Smoothing
  - Live strikethrough original prices & discount tags.
- **Moments at V.K Unisex Salon Gallery**: Carousel slider with navigation controls and full-screen image lightbox.
- **About Section**: *More Than Just a Salon* with stats (500+ Clients, 5.0 Rating, Clean & Hygienic, Convenient Location) and salon interior showcase.
- **Visit Our Salon**: Location card with interactive map preview, Google Maps directions, business hours, and phone call buttons.
- **Google Reviews**: 5.0 Star rated testimonials from local clients.
- **Interactive Appointment Booking**:
  - Service selection, gender category, date picker, time slot selector.
  - Estimated price with active discounts.
  - Instant WhatsApp Booking with pre-filled message to `+91 98722 65230` or instant reservation.
- **Full Responsive Design**: Mobile hamburger menu drawer + fixed bottom quick action bar ([Call] [WhatsApp] [Book Slot]).

---

## 🔐 Hidden Admin Portal

- **URL**: [`/admin`](http://localhost:3000/admin)
- **Secret Keyboard Shortcut**: `Ctrl + Shift + A`
- **Secret Footer Link**: Click the discrete lock icon next to the phone number in the footer.
- **Default Password**: `admin123` *(or `vkadmin`)*

### Admin Capabilities:
1. **Store-wide Discount on ALL Services**:
   - Master switch to activate/deactivate global discount across all salon services.
   - Presets: `10%`, `15%`, `20%`, `25%`, `30%`, `50%` or custom %.
   - Custom top announcement banner.
2. **Service Management**:
   - Change service photos (choose from salon presets, enter custom URL, or upload from device).
   - Change service titles, base prices (₹), and individual discounts.
   - Edit descriptions and badge icons.
   - Add new services or delete services.
   - One-click restore to factory defaults.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

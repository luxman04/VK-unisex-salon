"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    id: 1,
    title: "Modern Salon Setup & Styling Stations",
    image: "/images/gallery-1.jpg",
    category: "Salon Interior",
  },
  {
    id: 2,
    title: "Bridal Wavy Hairstyle with Floral Accessory",
    image: "/images/gallery-2.jpg",
    category: "Hair Styling",
  },
  {
    id: 3,
    title: "Precision Skin Taper Fade Haircut",
    image: "/images/gallery-3.jpg",
    category: "Men's Grooming",
  },
  {
    id: 4,
    title: "Reception & Hair Treatment Care Shelf",
    image: "/images/gallery-4.jpg",
    category: "Salon Products",
  },
  {
    id: 5,
    title: "V.K Unisex Salon Service Menu Board",
    image: "/images/gallery-5.jpg",
    category: "Service Board",
  },
  {
    id: 6,
    title: "Indian Bridal Makeup & Royal Jewellery Look",
    image: "/images/gallery-6.jpg",
    category: "Bridal Makeover",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.bgDecoPattern} />

      <div className="container">
        {/* Gallery Header */}
        <div className={styles.galleryHeaderRow}>
          <div className={styles.headerTextGroup}>
            <span className={styles.tagline}>OUR GALLERY</span>
            <h2 className={styles.galleryTitle}>Moments at V.K Unisex Salon</h2>
          </div>

          <button
            onClick={() => handleScroll("right")}
            className={styles.viewGalleryBtn}
            type="button"
          >
            <span>View Gallery</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Carousel Slider with Controls */}
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.navArrowBtn} ${styles.navPrev}`}
            onClick={() => handleScroll("left")}
            aria-label="Previous gallery images"
            type="button"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.sliderTrack} ref={trackRef}>
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={styles.galleryCard}
                onClick={() => setSelectedPhoto(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedPhoto(item);
                  }
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles.navArrowBtn} ${styles.navNext}`}
            onClick={() => handleScroll("right")}
            aria-label="Next gallery images"
            type="button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxCloseBtn}
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close image preview"
              type="button"
            >
              <X size={22} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <p className={styles.lightboxCaption}>
              {selectedPhoto.title} • {selectedPhoto.category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

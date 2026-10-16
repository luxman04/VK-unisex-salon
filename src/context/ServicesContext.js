"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { initialServices, initialGlobalSettings } from "@/data/servicesData";

const ServicesContext = createContext(null);

const STORAGE_KEY_SERVICES = "vk_salon_services";
const STORAGE_KEY_SETTINGS = "vk_salon_global_settings";

export function ServicesProvider({ children }) {
  const [services, setServices] = useState(initialServices);
  const [globalSettings, setGlobalSettings] = useState(initialGlobalSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedServices = localStorage.getItem(STORAGE_KEY_SERVICES);
      if (savedServices) {
        setServices(JSON.parse(savedServices));
      }

      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) {
        setGlobalSettings(JSON.parse(savedSettings));
      }
    } catch (e) {
      console.error("Failed to load salon data from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes to localStorage
  const saveServices = (newServices) => {
    setServices(newServices);
    try {
      localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(newServices));
    } catch (e) {
      console.error("Failed to save services", e);
    }
  };

  const saveSettings = (newSettings) => {
    setGlobalSettings(newSettings);
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(newSettings));
    } catch (e) {
      console.error("Failed to save settings", e);
    }
  };

  const updateService = (id, updatedFields) => {
    const updated = services.map((s) => (s.id === id ? { ...s, ...updatedFields } : s));
    saveServices(updated);
  };

  const addService = (newService) => {
    const serviceWithId = {
      ...newService,
      id: newService.id || "service-" + Date.now(),
      price: Number(newService.price) || 0,
      discountPercent: Number(newService.discountPercent) || 0,
    };
    saveServices([...services, serviceWithId]);
  };

  const deleteService = (id) => {
    const updated = services.filter((s) => s.id !== id);
    saveServices(updated);
  };

  const resetToDefaults = () => {
    saveServices(initialServices);
    saveSettings(initialGlobalSettings);
  };

  // Helper function to calculate final price and discount
  const getServicePricing = (service) => {
    const originalPrice = Number(service?.price) || 0;
    let discount = 0;

    if (globalSettings.globalDiscountActive && globalSettings.globalDiscountPercent > 0) {
      discount = Number(globalSettings.globalDiscountPercent);
    } else if (service?.discountPercent > 0) {
      discount = Number(service.discountPercent);
    }

    const discountAmount = Math.round((originalPrice * discount) / 100);
    const finalPrice = Math.max(0, originalPrice - discountAmount);

    return {
      originalPrice,
      finalPrice,
      discountPercent: discount,
      hasDiscount: discount > 0,
      isGlobalDiscount: globalSettings.globalDiscountActive && globalSettings.globalDiscountPercent > 0,
    };
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        globalSettings,
        isLoaded,
        updateService,
        addService,
        deleteService,
        saveSettings,
        resetToDefaults,
        getServicePricing,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
}

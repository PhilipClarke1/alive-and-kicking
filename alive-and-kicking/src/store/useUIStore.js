import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUIStore = create(
  persist(
    (set) => ({
      // State
      activeSection: "hero",
      isMobileNavOpen: false,
      menuFilter: "all",

      // Actions
      setActiveSection: (section) => set({ activeSection: section }),

      toggleMobileNav: () =>
        set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),

      closeMobileNav: () => set({ isMobileNavOpen: false }),

      setMenuFilter: (filter) => set({ menuFilter: filter }),
    }),
    {
      name: "akl-ui-storage",
      // Only persist menuFilter to localStorage (exclude UI state)
      partialize: (state) => ({ menuFilter: state.menuFilter }),
    }
  )
);

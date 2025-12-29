import { useEffect } from "react";
import { useUIStore } from "../store/useUIStore";

const sectionIds = ["hero", "menu", "about", "location", "contact"];

export function useActiveSection() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);

  useEffect(() => {
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [setActiveSection]);
}

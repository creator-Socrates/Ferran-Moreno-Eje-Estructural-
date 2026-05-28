"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Global click listener that automatically tracks high-value interactions
 * without requiring per-page modifications.
 *
 * Captures:
 *   - Clicks on any wa.me link → click_whatsapp
 *   - Clicks on any mailto: link → click_email
 *   - Clicks on Google Maps business profile link → click_maps_business
 *
 * The event always includes the current page path so we know which
 * page converted the click.
 */
export function AnalyticsListener() {
  useEffect(() => {
    function getTrackContext(link: HTMLAnchorElement) {
      const container = link.closest<HTMLElement>("[data-track-location], [data-track-section]");
      const location =
        link.dataset.trackLocation ||
        container?.dataset.trackLocation;
      const section =
        link.dataset.trackSection ||
        container?.dataset.trackSection;
      const label =
        link.dataset.trackLabel ||
        link.getAttribute("aria-label") ||
        link.textContent?.replace(/\s+/g, " ").trim() ||
        undefined;

      return {
        location,
        section,
        label: label || undefined,
      };
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const customEvent = link.dataset.trackEvent;
      const { location, section, label } = getTrackContext(link);

      if (customEvent) {
        trackEvent(customEvent, {
          page: window.location.pathname,
          href,
          location,
          section,
          label,
        });
        return;
      }

      if (href.includes("wa.me")) {
        trackEvent("click_whatsapp", {
          page: window.location.pathname,
          href,
          location,
          section,
          label,
        });
        return;
      }

      if (href === "/contacto" || href.startsWith("/contacto?")) {
        trackEvent("click_contact_page", {
          page: window.location.pathname,
          location,
          section,
          label,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("click_email", {
          page: window.location.pathname,
          location,
          section,
          label,
        });
        return;
      }

      if (href.includes("maps.app.goo.gl/8Hd8KbJKawB7BjWZ6")) {
        trackEvent("click_maps_business", {
          page: window.location.pathname,
          location,
          section,
          label,
        });
        return;
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const milestones = [25, 50, 75, 90];
    const seen = new Set<number>();

    function handleScroll() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;

      const progress = Math.round((window.scrollY / documentHeight) * 100);

      milestones.forEach((milestone) => {
        if (progress >= milestone && !seen.has(milestone)) {
          seen.add(milestone);
          trackEvent("scroll_depth", {
            depth: milestone,
            page: window.location.pathname,
          });
        }
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-track-section]"));
    if (sections.length === 0) return;

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = (entry.target as HTMLElement).dataset.trackSection;
          if (!section || seen.has(section)) return;

          seen.add(section);
          trackEvent("view_section", {
            section,
            page: window.location.pathname,
          });
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}

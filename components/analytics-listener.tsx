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
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";

      if (href.includes("wa.me")) {
        trackEvent("click_whatsapp", {
          page: window.location.pathname,
          href,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("click_email", {
          page: window.location.pathname,
        });
        return;
      }

      if (href.includes("maps.app.goo.gl/8Hd8KbJKawB7BjWZ6")) {
        trackEvent("click_maps_business", {
          page: window.location.pathname,
        });
        return;
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

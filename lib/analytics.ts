/**
 * Lightweight GA4 event tracking helper.
 *
 * Usage:
 *   trackEvent("click_whatsapp", { location: "home_hero" });
 *   trackEvent("newsletter_signup", { source: "footer" });
 *
 * Silent no-op if gtag is not loaded (SSR or blocked by ad blocker).
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventName: string,
      params?: GtagParams
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, {
      ...params,
      page_path: window.location.pathname,
    });
  } catch {
    // Silent — analytics should never break the user experience
  }
}

/**
 * Helper to wrap an onClick that also navigates (for links).
 * Returns an event handler that fires the event then lets the default
 * navigation happen.
 */
export function trackedClick(
  eventName: string,
  params: GtagParams = {}
): () => void {
  return () => trackEvent(eventName, params);
}

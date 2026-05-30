"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-RZKCT72MHX";

function loadGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const s1 = document.createElement("script");
  s1.id = "ga-script";
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.id = "ga-inline";
  s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
  document.head.appendChild(s2);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      loadGA();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "var(--bg-main, #fff)",
        border: "1px solid var(--border-subtle, #e5e7eb)",
        borderRadius: "8px",
        padding: "1rem 1.25rem",
        maxWidth: "480px",
        width: "calc(100% - 2rem)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <p style={{ fontSize: "13px", lineHeight: 1.5, margin: 0, color: "var(--text-secondary, #555)" }}>
        This site uses cookies to measure traffic (Google Analytics).{" "}
        <a
          href="/en/privacy"
          style={{ textDecoration: "underline", color: "inherit" }}
        >
          Privacy policy
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          onClick={accept}
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 14px",
            background: "var(--text-main, #111)",
            color: "var(--bg-main, #fff)",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 14px",
            background: "transparent",
            color: "var(--text-secondary, #555)",
            border: "1px solid var(--border-subtle, #ddd)",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}

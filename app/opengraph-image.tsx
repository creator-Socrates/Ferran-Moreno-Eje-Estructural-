import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ferran Moreno — Trabajo corporal · Regulación · Energía";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FBFBFD",
          color: "#1D1D1F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#6E6E73",
          }}
        >
          Trabajo corporal · Regulación · Energía
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <div style={{ display: "flex" }}>Cuando el cuerpo pierde eje,</div>
          <div style={{ display: "flex", color: "#6E6E73" }}>
            no necesita más fuerza.
          </div>
          <div style={{ display: "flex" }}>Necesita precisión.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontWeight: 700,
                fontSize: 34,
                letterSpacing: "-0.01em",
              }}
            >
              Ferran Moreno
            </div>
            <div
              style={{
                display: "flex",
                color: "#6E6E73",
                fontSize: 19,
                marginTop: 10,
              }}
            >
              Online · Sesiones presenciales en Lluçà, Barcelona
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#3A3A3C",
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            ferran-moreno.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SI RISKCONSULTING – Bureau d'études en sécurité incendie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #060c18 0%, #0d1626 60%, #111f38 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #dc2626)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "900",
              color: "white",
            }}
          >
            SI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", fontWeight: "800", color: "white" }}>
              SI RISKCONSULTING
            </span>
            <span style={{ fontSize: "14px", color: "#94a3b8" }}>
              Bureau d&apos;études en sécurité incendie
            </span>
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "62px",
            fontWeight: "900",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Maîtriser le risque{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            incendie
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            marginBottom: "48px",
          }}
        >
          CSSI · MOE SSI · AMO · Audits · Conformité ERP / IGH / ICPE
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["ERP", "IGH", "ICPE", "Logistique", "Industrie"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(249, 115, 22, 0.15)",
                border: "1px solid rgba(249, 115, 22, 0.3)",
                color: "#fb923c",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "#475569",
          }}
        >
          www.si-riskconsulting.fr
        </div>
      </div>
    ),
    { ...size }
  );
}

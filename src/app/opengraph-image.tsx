import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "ExpoTalento UTN 2026 - Feria de empleo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoPath = path.join(process.cwd(), "public", "Logo ExpoTalento.png");
  const logoSrc = `data:image/png;base64,${fs.readFileSync(logoPath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1b2a5e 0%, #1b2a5e 55%, #12172b 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              borderRadius: 40,
              padding: 32,
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <img src={logoSrc} width={280} height={280} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#7ec2e8",
              fontWeight: 500,
            }}
          >
            Miércoles 29 de julio · UTN Alajuela · Entrada libre
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

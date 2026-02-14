import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 25% 25%, #1a0f0a 0%, #0d0704 40%, #000000 100%)",
          borderRadius: "50%",
          boxShadow: "0 12px 40px rgba(0,0,0,0.9), 0 0 0 1px #2a2a2a, 0 0 0 3px #8B7355, 0 0 0 5px #1a1a1a, 0 0 0 6px #DAA520",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(218,165,32,0.15) 0%, transparent 50%, rgba(218,165,32,0.08) 80%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          width: "92%",
          height: "92%",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%)",
          boxShadow: "inset 0 0 20px rgba(218,165,32,0.3), 0 0 20px rgba(218,165,32,0.3)",
        }} />
        <div style={{
          position: "absolute",
          width: "85%",
          height: "85%",
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.5)",
          boxShadow: "inset 0 0 10px rgba(255,215,0,0.2)",
        }} />
        <div style={{
          position: "absolute",
          width: "76%",
          height: "76%",
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.4)",
        }} />
        <div style={{
          position: "absolute",
          width: "67%",
          height: "67%",
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.3)",
        }} />
        <div style={{
          position: "absolute",
          width: "58%",
          height: "58%",
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.2)",
        }} />
        <div style={{
          position: "absolute",
          width: "49%",
          height: "49%",
          borderRadius: "50%",
          border: "1px solid rgba(255,215,0,0.1)",
        }} />
        <span style={{ fontSize: 15, filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.9)) brightness(1.15) saturate(1.1)" }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}

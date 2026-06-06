import React from "react";

export default function AdBanner({ type = "banner" }) {
  // Types can be "banner" (slim bottom ad) or "large-box" (for the result page)
  const isLarge = type === "large-box";
  
  return (
    <div 
      className="ad-banner-container"
      style={{
        minHeight: isLarge ? "200px" : "60px",
        margin: isLarge ? "2rem 0" : "1.5rem 0",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.03) 100%)",
        border: "1px dashed rgba(255, 255, 255, 0.12)",
        borderRadius: "16px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "6px",
          right: "10px",
          fontSize: "10px",
          color: "rgba(255, 255, 255, 0.25)",
          fontWeight: "600",
          letterSpacing: "1px"
        }}
      >
        ADVERTISEMENT
      </div>
      
      <div 
        style={{
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          fontWeight: "500",
          textAlign: "center"
        }}
      >
        {isLarge ? (
          <>
            <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "#a855f7", marginBottom: "0.25rem" }}>
              Google AdSense / AdMob
            </div>
            <div style={{ opacity: 0.7 }}>수익성 극대화를 위한 전면/대형 배너 영역</div>
          </>
        ) : (
          "구글 애드센스 광고 영역 (수익화 배너)"
        )}
      </div>
      <div 
        style={{
          fontSize: "11px",
          color: "rgba(255, 255, 255, 0.3)",
          marginTop: "4px"
        }}
      >
        {isLarge ? "300 x 250 Medium Rectangle" : "320 x 50 Mobile Leaderboard"}
      </div>
    </div>
  );
}

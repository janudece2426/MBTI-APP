import React from "react";
import { Play, Sparkles, BookOpen, Shield } from "lucide-react";
import AdBanner from "./AdBanner";

export default function Home({ onStartTest, onOpenExplorer, onOpenPrivacy }) {
  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Hero Header Card */}
      <div className="glass-card" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        
        {/* Subtle decorative glowing orb inside the card */}
        <div 
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(30px)",
            pointerEvents: "none"
          }}
        />

        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255, 255, 255, 0.05)", padding: "0.35rem 0.85rem", borderRadius: "99px", fontSize: "0.8rem", fontWeight: "600", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.2)", marginBottom: "1.25rem" }}>
          <Sparkles size={14} />
          100% 무료 성격 테스트
        </div>

        <h1 className="hero-title">나의 진짜 MBTI 유형은?</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
          일부 부정적인 선입견을 없애고 긍정적인 자아 성찰을 돕는 20개 문항의 정밀 테스트. 
          나의 강점과 최적의 진로, 그리고 연애 궁합까지 확인해 보세요.
        </p>

        {/* Beautiful Floating Axis Badges Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "2.5rem",
            maxWidth: "360px",
            margin: "0 auto 2.5rem auto"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(251, 146, 60, 0.08)", border: "1px solid rgba(251, 146, 60, 0.15)", padding: "0.75rem 1rem", borderRadius: "16px" }}>
            <span style={{ fontWeight: "800", color: "var(--color-e)" }}>E</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>외향형</span>
            <span style={{ fontWeight: "800", color: "var(--color-i)" }}>I</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(96, 165, 250, 0.08)", border: "1px solid rgba(96, 165, 250, 0.15)", padding: "0.75rem 1rem", borderRadius: "16px" }}>
            <span style={{ fontWeight: "800", color: "var(--color-s)" }}>S</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>감각형</span>
            <span style={{ fontWeight: "800", color: "var(--color-n)" }}>N</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(244, 63, 94, 0.08)", border: "1px solid rgba(244, 63, 94, 0.15)", padding: "0.75rem 1rem", borderRadius: "16px" }}>
            <span style={{ fontWeight: "800", color: "var(--color-t)" }}>T</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>사고형</span>
            <span style={{ fontWeight: "800", color: "var(--color-f)" }}>F</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(45, 212, 191, 0.08)", border: "1px solid rgba(45, 212, 191, 0.15)", padding: "0.75rem 1rem", borderRadius: "16px" }}>
            <span style={{ fontWeight: "800", color: "var(--color-j)" }}>J</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>계획형</span>
            <span style={{ fontWeight: "800", color: "var(--color-p)" }}>P</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", maxWidth: "340px", margin: "0 auto" }}>
          <button className="btn-primary" onClick={onStartTest}>
            <Play size={18} fill="white" />
            무료 테스트 시작하기
          </button>
          
          <button className="btn-secondary" onClick={onOpenExplorer}>
            <BookOpen size={18} />
            16가지 성격 유형 백과사전
          </button>
        </div>

        <div style={{ marginTop: "1.75rem", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "500" }}>
          🔥 현재까지 <span style={{ color: "#a855f7", fontWeight: "700" }}>134,281명</span>이 검사를 완료했습니다.
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner type="banner" />

      {/* Trust Badges */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          textAlign: "center"
        }}
      >
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "20px" }}>
          <div style={{ fontWeight: "700", fontSize: "0.95rem", marginBottom: "0.25rem", color: "var(--text-main)" }}>⏱️ 단 5분 소요</div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>답변하기 편안한 문항 설계</div>
        </div>
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "20px" }}>
          <div style={{ fontWeight: "700", fontSize: "0.95rem", marginBottom: "0.25rem", color: "var(--text-main)" }}>🔒 익명 및 현지 처리</div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>개인정보 안전 보호</div>
        </div>
      </div>
    </div>
  );
}

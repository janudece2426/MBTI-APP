import React, { useState } from "react";
import { ArrowLeft, BookOpen, ShieldCheck, ChevronRight, CheckCircle, AlertTriangle, Briefcase, Award } from "lucide-react";
import { mbtiProfiles } from "../data/mbtiProfiles";

export default function TypeExplorer({ onBack }) {
  const [selectedType, setSelectedType] = useState(null);
  const [activeGroup, setActiveGroup] = useState("All");

  const typesList = Object.values(mbtiProfiles);

  const groups = [
    { id: "All", label: "전체" },
    { id: "Analysts", label: "분석가형 (NT)" },
    { id: "Diplomats", label: "외교관형 (NF)" },
    { id: "Sentinels", label: "관리자형 (SJ)" },
    { id: "Explorers", label: "탐험가형 (SP)" }
  ];

  const filteredTypes = activeGroup === "All" 
    ? typesList 
    : typesList.filter(t => t.group === activeGroup);

  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {selectedType ? (
        /* Detailed Profile View */
        <div className="glass-card animate-scale-in">
          <button className="btn-back" onClick={() => setSelectedType(null)} style={{ marginBottom: "1.5rem" }}>
            <ArrowLeft size={16} />
            목록으로 돌아가기
          </button>

          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span 
              style={{ 
                background: "rgba(168, 85, 247, 0.08)", 
                border: "1px solid rgba(168, 85, 247, 0.15)", 
                padding: "0.25rem 0.75rem", 
                borderRadius: "99px",
                fontSize: "0.75rem",
                fontWeight: "700",
                color: "#a855f7"
              }}
            >
              {selectedType.group === "Analysts" && "분석가형 (NT)"}
              {selectedType.group === "Diplomats" && "외교관형 (NF)"}
              {selectedType.group === "Sentinels" && "관리자형 (SJ)"}
              {selectedType.group === "Explorers" && "탐험가형 (SP)"}
            </span>
            <h1 className="result-mbti-code" style={{ fontSize: "3.5rem", marginTop: "0.5rem" }}>{selectedType.code}</h1>
            <h2 className="result-mbti-name" style={{ fontSize: "1.25rem" }}>{selectedType.title}</h2>
            <p style={{ fontStyle: "italic", color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
              "{selectedType.tagline}"
            </p>
          </div>

          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1.5rem", 
              paddingTop: "1.5rem", 
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: "0.95rem",
              lineHeight: "1.6"
            }}
          >
            {/* Description */}
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--text-main)" }}>개요</h3>
              <p style={{ color: "rgba(243, 244, 246, 0.85)" }}>{selectedType.description}</p>
            </div>

            {/* Strengths / Weaknesses */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#10b981", marginBottom: "0.5rem" }}>
                  <CheckCircle size={15} />
                  주요 강점
                </div>
                <ul style={{ paddingLeft: "1.15rem", color: "var(--text-muted)" }}>
                  {selectedType.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#f43f5e", marginBottom: "0.5rem" }}>
                  <AlertTriangle size={15} />
                  주의할 약점
                </div>
                <ul style={{ paddingLeft: "1.15rem", color: "var(--text-muted)" }}>
                  {selectedType.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>

            {/* Careers */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#06b6d4", marginBottom: "0.5rem" }}>
                <Briefcase size={15} />
                추천 커리어
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {selectedType.careers.map((c, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      background: "rgba(6, 182, 212, 0.08)", 
                      border: "1px solid rgba(6, 182, 212, 0.15)", 
                      color: "#06b6d4", 
                      padding: "0.3rem 0.65rem", 
                      borderRadius: "8px", 
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Match Cards */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#a855f7", marginBottom: "0.5rem" }}>
                <Award size={15} />
                궁합 정보
              </div>
              <div className="match-cards-container">
                <div className="match-card best" style={{ padding: "0.75rem" }}>
                  <div className="match-type-title" style={{ fontSize: "0.7rem", color: "#10b981" }}>천생연분</div>
                  <div className="match-type-code" style={{ fontSize: "1.25rem", color: "#10b981" }}>{selectedType.bestMatch}</div>
                  <div className="match-type-desc" style={{ fontSize: "0.75rem" }}>{selectedType.bestMatchName}</div>
                </div>
                <div className="match-card worst" style={{ padding: "0.75rem" }}>
                  <div className="match-type-title" style={{ fontSize: "0.7rem", color: "#f43f5e" }}>상호 주의</div>
                  <div className="match-type-code" style={{ fontSize: "1.25rem", color: "#f43f5e" }}>{selectedType.worstMatch}</div>
                  <div className="match-type-desc" style={{ fontSize: "0.75rem" }}>{selectedType.worstMatchName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Main Catalog View */
        <div className="glass-card">
          <button className="btn-back" onClick={onBack} style={{ marginBottom: "1.5rem" }}>
            <ArrowLeft size={16} />
            메인 홈으로
          </button>

          <h2 className="section-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <BookOpen size={22} color="#a855f7" />
            16가지 성격 유형 백과사전
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
            궁금한 유형을 선택해 성격 분석 요약, 강약점, 커리어 및 다른 유형들과의 궁합을 미리 살펴보세요.
          </p>

          {/* Group Tabs */}
          <div 
            style={{ 
              display: "flex", 
              gap: "0.5rem", 
              overflowX: "auto", 
              paddingBottom: "0.75rem",
              marginBottom: "1rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)" 
            }}
          >
            {groups.map(g => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                style={{
                  background: activeGroup === g.id ? "var(--primary-gradient)" : "rgba(255, 255, 255, 0.03)",
                  border: activeGroup === g.id ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  padding: "0.45rem 0.85rem",
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s"
                }}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Types Grid list */}
          <div className="types-grid">
            {filteredTypes.map(t => {
              // Custom left accent border based on temperament group
              let groupColor = "#a855f7";
              if (t.group === "Analysts") groupColor = "#06b6d4";
              if (t.group === "Sentinels") groupColor = "#10b981";
              if (t.group === "Explorers") groupColor = "#facc15";

              return (
                <button
                  key={t.code}
                  className="type-mini-card"
                  onClick={() => setSelectedType(t)}
                  style={{
                    borderLeft: `3px solid ${groupColor}`
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div className="type-mini-code">{t.code}</div>
                      <div className="type-mini-name">{t.title}</div>
                    </div>
                    <ChevronRight size={16} color="rgba(255, 255, 255, 0.3)" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

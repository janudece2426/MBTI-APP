import React, { useState } from "react";
import { Share2, RefreshCw, Briefcase, Award, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";
import { mbtiProfiles } from "../data/mbtiProfiles";
import { shareMbtiResult } from "./KakaoShare";
import AdBanner from "./AdBanner";

export default function Result({ scores, onRetry }) {
  const [activeTab, setActiveTab] = useState("description");

  // Calculate percentages and final MBTI type
  // scores is an object: { E: num, I: num, S: num, N: num, T: num, F: num, J: num, P: num }
  const ePercent = Math.round((scores.E / 5) * 100);
  const iPercent = 100 - ePercent;

  const sPercent = Math.round((scores.S / 5) * 100);
  const nPercent = 100 - sPercent;

  const tPercent = Math.round((scores.T / 5) * 100);
  const fPercent = 100 - tPercent;

  const jPercent = Math.round((scores.J / 5) * 100);
  const pPercent = 100 - jPercent;

  const mbtiCode = `${ePercent >= 50 ? "E" : "I"}${sPercent >= 50 ? "S" : "N"}${tPercent >= 50 ? "T" : "F"}${jPercent >= 50 ? "J" : "P"}`;
  
  const profile = mbtiProfiles[mbtiCode] || {
    code: mbtiCode,
    title: "성향 분석 완료",
    tagline: "당신만을 위한 고유한 성격적 특징",
    description: "성격 성향 분석 결과가 생성되었습니다.",
    strengths: ["매사에 긍정적", "성실한 태도"],
    weaknesses: ["거절을 어려워함"],
    careers: ["크리에이터", "전문가"],
    bestMatch: "ENFP",
    worstMatch: "ISTJ",
    bestMatchName: "활동가",
    worstMatchName: "논리주의자"
  };

  const handleKakaoShare = () => {
    const res = shareMbtiResult(profile.code, profile.title, profile.tagline);
    if (res.success) {
      if (res.method === "kakao") {
        alert("카카오톡 공유 창이 열립니다.");
      } else {
        alert("결과 설명이 클립보드에 복사되었습니다! 친구에게 붙여넣기해 공유해 보세요.");
      }
    } else {
      alert("공유를 처리할 수 없습니다.");
    }
  };

  const handleCopyLink = () => {
    const text = `[나의 MBTI 결과: ${profile.code} - ${profile.title}]\n"${profile.tagline}"\n\n무료 MBTI 테스트 하러가기: ${window.location.origin}`;
    navigator.clipboard.writeText(text)
      .then(() => alert("결과가 성공적으로 클립보드에 복사되었습니다!"))
      .catch(() => alert("복사에 실패했습니다. 직접 복사해 주세요."));
  };

  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Title Header Card */}
      <div className="glass-card" style={{ textAlign: "center", padding: "2.5rem 1.5rem" }}>
        
        <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "#a855f7", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          YOUR PERSONALITY TYPE
        </div>
        
        <div className="result-glowing-title">
          <div className="result-mbti-code">{profile.code}</div>
          <div className="result-mbti-name">{profile.title}</div>
        </div>

        <p 
          style={{ 
            color: "var(--text-muted)", 
            fontSize: "0.95rem", 
            lineHeight: "1.6", 
            marginTop: "1rem",
            background: "rgba(255, 255, 255, 0.02)",
            padding: "0.85rem",
            borderRadius: "14px",
            border: "1px solid rgba(255, 255, 255, 0.04)"
          }}
        >
          💡 "{profile.tagline}"
        </p>

        {/* Action Row */}
        <div className="action-buttons-row">
          <button className="btn-primary" onClick={handleKakaoShare}>
            <Share2 size={18} />
            카카오톡 공유하기
          </button>
          
          <button className="btn-secondary" onClick={handleCopyLink}>
            결과 텍스트 복사
          </button>
        </div>
      </div>

      {/* Axis Graph Card */}
      <div className="glass-card">
        <h2 className="section-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem" }}>
          <TrendingUp size={20} color="#a855f7" />
          성향 세부 분석 (Percentage)
        </h2>
        
        <div className="axis-container">
          {/* E vs I */}
          <div className="axis-row">
            <div className="axis-labels">
              <span className="axis-label-left" style={{ color: "var(--color-e)" }}>E 외향형 ({ePercent}%)</span>
              <span className="axis-label-right" style={{ color: "var(--color-i)" }}>I 내향형 ({iPercent}%)</span>
            </div>
            <div className="axis-bar-track">
              <div 
                className="axis-bar-left" 
                style={{ 
                  width: `${ePercent}%`, 
                  background: "var(--color-e)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {ePercent > 15 && `${ePercent}%`}
              </div>
              <div 
                className="axis-bar-right" 
                style={{ 
                  width: `${iPercent}%`, 
                  background: "var(--color-i)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {iPercent > 15 && `${iPercent}%`}
              </div>
            </div>
          </div>

          {/* S vs N */}
          <div className="axis-row">
            <div className="axis-labels">
              <span className="axis-label-left" style={{ color: "var(--color-s)" }}>S 감각형 ({sPercent}%)</span>
              <span className="axis-label-right" style={{ color: "var(--color-n)" }}>N 직관형 ({nPercent}%)</span>
            </div>
            <div className="axis-bar-track">
              <div 
                className="axis-bar-left" 
                style={{ 
                  width: `${sPercent}%`, 
                  background: "var(--color-s)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {sPercent > 15 && `${sPercent}%`}
              </div>
              <div 
                className="axis-bar-right" 
                style={{ 
                  width: `${nPercent}%`, 
                  background: "var(--color-n)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {nPercent > 15 && `${nPercent}%`}
              </div>
            </div>
          </div>

          {/* T vs F */}
          <div className="axis-row">
            <div className="axis-labels">
              <span className="axis-label-left" style={{ color: "var(--color-t)" }}>T 사고형 ({tPercent}%)</span>
              <span className="axis-label-right" style={{ color: "var(--color-f)" }}>F 감정형 ({fPercent}%)</span>
            </div>
            <div className="axis-bar-track">
              <div 
                className="axis-bar-left" 
                style={{ 
                  width: `${tPercent}%`, 
                  background: "var(--color-t)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {tPercent > 15 && `${tPercent}%`}
              </div>
              <div 
                className="axis-bar-right" 
                style={{ 
                  width: `${fPercent}%`, 
                  background: "var(--color-f)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {fPercent > 15 && `${fPercent}%`}
              </div>
            </div>
          </div>

          {/* J vs P */}
          <div className="axis-row">
            <div className="axis-labels">
              <span className="axis-label-left" style={{ color: "var(--color-j)" }}>J 계획형 ({jPercent}%)</span>
              <span className="axis-label-right" style={{ color: "var(--color-p)" }}>P 인식형 ({pPercent}%)</span>
            </div>
            <div className="axis-bar-track">
              <div 
                className="axis-bar-left" 
                style={{ 
                  width: `${jPercent}%`, 
                  background: "var(--color-j)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {jPercent > 15 && `${jPercent}%`}
              </div>
              <div 
                className="axis-bar-right" 
                style={{ 
                  width: `${pPercent}%`, 
                  background: "var(--color-p)",
                  color: "#000",
                  fontWeight: "800"
                }}
              >
                {pPercent > 15 && `${pPercent}%`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Description Tabs Card */}
      <div className="glass-card">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            유형 특징
          </button>
          <button 
            className={`tab-btn ${activeTab === "traits" ? "active" : ""}`}
            onClick={() => setActiveTab("traits")}
          >
            장단점 분석
          </button>
          <button 
            className={`tab-btn ${activeTab === "careers" ? "active" : ""}`}
            onClick={() => setActiveTab("careers")}
          >
            어울리는 진로
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <p style={{ textIndent: "0.5rem" }}>{profile.description}</p>
          )}

          {activeTab === "traits" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#10b981", marginBottom: "0.5rem" }}>
                <CheckCircle size={16} />
                주요 강점 (Strengths)
              </div>
              <ul style={{ marginBottom: "1.25rem", color: "var(--text-main)" }}>
                {profile.strengths.map((str, idx) => (
                  <li key={idx}>{str}</li>
                ))}
              </ul>
              
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#f43f5e", marginBottom: "0.5rem" }}>
                <AlertTriangle size={16} />
                주의할 약점 (Weaknesses)
              </div>
              <ul style={{ color: "var(--text-main)" }}>
                {profile.weaknesses.map((weak, idx) => (
                  <li key={idx}>{weak}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "careers" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", color: "#06b6d4", marginBottom: "0.75rem" }}>
                <Briefcase size={16} />
                추천 직업군 및 커리어
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {profile.careers.map((job, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      background: "rgba(6, 182, 212, 0.08)", 
                      border: "1px solid rgba(6, 182, 212, 0.2)", 
                      color: "#06b6d4", 
                      padding: "0.4rem 0.85rem", 
                      borderRadius: "10px",
                      fontSize: "0.85rem",
                      fontWeight: "600"
                    }}
                  >
                    {job}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                * 위의 직업군은 해당 성향이 가진 직무 선호 특성 및 문제해결 방식에 잘 부합하는 진로 예시입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Compatibility Card */}
      <div className="glass-card">
        <h2 className="section-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem" }}>
          <Award size={20} color="#a855f7" />
          성격 유형 케미스트리 (궁합)
        </h2>
        
        <div className="match-cards-container">
          <div className="match-card best">
            <div className="match-type-title" style={{ color: "#10b981" }}>최고의 궁합 (Best)</div>
            <div className="match-type-code" style={{ color: "#10b981" }}>{profile.bestMatch}</div>
            <div className="match-type-desc">{profile.bestMatchName}</div>
          </div>
          <div className="match-card worst">
            <div className="match-type-title" style={{ color: "#f43f5e" }}>파란의 궁합 (Caution)</div>
            <div className="match-type-code" style={{ color: "#f43f5e" }}>{profile.worstMatch}</div>
            <div className="match-type-desc">{profile.worstMatchName}</div>
          </div>
        </div>
      </div>

      {/* Large Ad Banner for Monetization */}
      <AdBanner type="large-box" />

      {/* Navigation Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <button className="btn-secondary" onClick={onRetry} style={{ padding: "1rem" }}>
          <RefreshCw size={16} />
          테스트 다시 시작하기
        </button>
      </div>
      
    </div>
  );
}

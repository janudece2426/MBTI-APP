import React from "react";
import { ArrowLeft, ShieldCheck, Cpu, Database } from "lucide-react";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="glass-card animate-fade-in" style={{ padding: "2rem 1.5rem" }}>
      <button className="btn-back" onClick={onBack} style={{ marginBottom: "1.5rem" }}>
        <ArrowLeft size={18} />
        홈으로 돌아가기
      </button>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <ShieldCheck size={48} color="#a855f7" style={{ marginBottom: "0.5rem" }} />
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>개인정보 처리방침 및 고지</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          사용자의 개인정보 보호와 규정 준수를 우선시합니다.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "0.95rem", lineHeight: "1.6" }}>
        
        {/* Section 1 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text-main)" }}>
            <Database size={18} color="#06b6d4" />
            1. 데이터 수집 및 처리 (로컬 처리 방식)
          </div>
          <p style={{ color: "var(--text-muted)", paddingLeft: "1.5rem" }}>
            본 서비스는 사용자의 MBTI 테스트 답변을 서버로 전송하지 않으며, 
            <strong> 브라우저 로컬 환경(Client-Side)</strong>에서 즉시 분석하여 결과를 계산합니다. 
            원치 않는 기기 정보 수집이나 식별 가능한 개인정보 저장은 일절 발생하지 않습니다.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text-main)" }}>
            <Cpu size={18} color="#10b981" />
            2. 생성형 AI 모델 학습 활용 거부 (Opt-out)
          </div>
          <p style={{ color: "var(--text-muted)", paddingLeft: "1.5rem" }}>
            본 서비스는 테스트 답변 및 통계 데이터를 생성형 AI(예: GPT, Gemini 등)의 추가 학습 모델 데이터로 제공하거나 활용하지 않습니다. 
            모든 데이터는 원천적으로 학습 목적 배제(Opt-out) 상태로 보호됩니다.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", fontWeight: "700", color: "var(--text-main)" }}>
            <ShieldCheck size={18} color="#a855f7" />
            3. 미래 기능에 대한 고지 (선택 사항)
          </div>
          <p style={{ color: "var(--text-muted)", paddingLeft: "1.5rem" }}>
            향후 서비스 품질 향상 및 전체 사용자 성향 통계 취합을 위해 데이터베이스(Firebase 등) 연동을 추가할 수 있습니다. 
            이 경우에도 개인을 특정할 수 있는 정보(이름, 이메일, 전화번호 등)를 완벽히 배제한 익명의 통계성 결과 데이터만 수집됨을 보장합니다.
          </p>
        </div>
        
      </div>

      <div 
        style={{ 
          marginTop: "2.5rem", 
          paddingTop: "1.5rem", 
          borderTop: "1px solid rgba(255, 255, 255, 0.08)", 
          textAlign: "center",
          fontSize: "0.8rem",
          color: "var(--text-muted)"
        }}
      >
        최종 수정일: 2026년 6월 6일<br />
        © 2026 무료 MBTI 테스트. All rights reserved.
      </div>
    </div>
  );
}

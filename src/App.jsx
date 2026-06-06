import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import Home from "./components/Home";
import Test from "./components/Test";
import Result from "./components/Result";
import TypeExplorer from "./components/TypeExplorer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { questions } from "./data/questions";
import { initKakao } from "./components/KakaoShare";

export default function App() {
  const [screen, setScreen] = useState("home"); // "home" | "test" | "loading" | "result" | "explorer" | "privacy"
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [loadingStep, setLoadingStep] = useState(0);

  // Initialize Kakao SDK on mount
  useEffect(() => {
    initKakao();
  }, []);

  // Handle simulated scientific calculation phase
  useEffect(() => {
    if (screen === "loading") {
      const stepTexts = [
        "성격 차원 답변 빈도 집계 중...",
        "E/I, S/N, T/F, J/P 인자 분산 분석 중...",
        "나의 성향 조합 매핑 중...",
        "개인 맞춤형 성격 리포트 생성 완료!"
      ];

      const interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < stepTexts.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setScreen("result");
            return 0;
          }
        });
      }, 600); // 4 steps x 600ms = 2.4 seconds total calculation wait time

      return () => clearInterval(interval);
    }
  }, [screen]);

  const handleStartTest = () => {
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setScreen("test");
  };

  const handleRetry = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.reload();
    }, 450);
  };

  const handleFinishTest = (answersList) => {
    // answersList is an array of letters (e.g. ['E', 'I', 'S', ...])
    const finalScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answersList.forEach((letter) => {
      if (letter in finalScores) {
        finalScores[letter] += 1;
      }
    });

    setScores(finalScores);
    setScreen("loading");
  };

  // Loading Screen Step Text mapping
  const stepMessages = [
    "성격 차원 답변 빈도 집계 중...",
    "E/I, S/N, T/F, J/P 인자 분산 분석 중...",
    "나의 성향 조합 매핑 중...",
    "개인 맞춤형 성격 리포트 생성 완료!"
  ];

  return (
    <div className="app-container">
      
      {/* Dynamic Content Area based on current state */}
      {screen === "home" && (
        <Home 
          onStartTest={handleStartTest} 
          onOpenExplorer={() => setScreen("explorer")} 
        />
      )}

      {screen === "test" && (
        <Test 
          questions={questions} 
          onAnswer={handleFinishTest} 
          onBackHome={() => setScreen("home")} 
        />
      )}

      {screen === "loading" && (
        <div className="glass-card loading-wrapper animate-scale-in">
          <div className="spinner"></div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            성향 분석 보고서 작성 중
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            {stepMessages[loadingStep]}
          </p>
          
          <div 
            style={{ 
              marginTop: "2rem", 
              width: "100%", 
              background: "rgba(255, 255, 255, 0.05)", 
              height: "4px", 
              borderRadius: "99px",
              overflow: "hidden"
            }}
          >
            <div 
              style={{ 
                height: "100%", 
                background: "var(--primary-gradient)", 
                width: `${((loadingStep + 1) / stepMessages.length) * 100}%`,
                transition: "width 0.4s ease"
              }}
            />
          </div>
        </div>
      )}

      {screen === "result" && (
        <Result 
          scores={scores} 
          onRetry={handleRetry} 
        />
      )}

      {screen === "explorer" && (
        <TypeExplorer 
          onBack={() => setScreen("home")} 
        />
      )}

      {screen === "privacy" && (
        <PrivacyPolicy 
          onBack={() => setScreen("home")} 
        />
      )}

      {/* Persistent App Footer containing Legal / QA links */}
      <footer className="app-footer">
        <div className="app-footer-links">
          <span className="app-footer-link" onClick={() => setScreen("privacy")}>
            개인정보 처리방침
          </span>
          <span className="app-footer-link" onClick={() => setScreen("explorer")}>
            16유형 백과사전
          </span>
        </div>
        <div>
          © 2026 무료 MBTI 성격 테스트. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

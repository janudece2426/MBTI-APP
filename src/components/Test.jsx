import React, { useState } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import AdBanner from "./AdBanner";

export default function Test({ questions, onAnswer, onBackHome }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelectOption = (weight) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = weight;
    setAnswers(nextAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Finished all questions! Send answers to App component
      onAnswer(nextAnswers);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onBackHome();
    }
  };

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="animate-scale-in" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      
      {/* Test Card */}
      <div className="glass-card" style={{ position: "relative" }}>
        
        {/* Top Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <button className="btn-back" onClick={handlePrevQuestion}>
            <ArrowLeft size={16} />
            {currentIndex === 0 ? "메인 홈" : "이전 질문"}
          </button>
          
          <div 
            style={{ 
              fontSize: "0.85rem", 
              fontWeight: "700", 
              background: "rgba(255, 255, 255, 0.06)", 
              padding: "0.25rem 0.65rem", 
              borderRadius: "99px",
              color: "var(--text-muted)"
            }}
          >
            질문 {currentIndex + 1} / {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>

        {/* Question Area */}
        <div 
          style={{ 
            marginTop: "2.5rem", 
            marginBottom: "2.5rem",
            minHeight: "80px", 
            display: "flex", 
            flexDirection: "column",
            gap: "0.75rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#a855f7" }}>
            <HelpCircle size={18} />
            <span style={{ fontSize: "0.85rem", fontWeight: "700", letterSpacing: "1px" }}>QUESTION</span>
          </div>
          <h2 
            style={{ 
              fontSize: "1.25rem", 
              fontWeight: "700", 
              lineHeight: "1.5", 
              color: "var(--text-main)" 
            }}
          >
            {currentQuestion.text}
          </h2>
        </div>

        {/* Options Stack */}
        <div className="likert-container">
          {currentQuestion.options.map((option, index) => {
            // Apply different hover colors based on index for a premium aesthetic
            const optionClass = index === 0 ? "option-strongly-agree" : "option-strongly-disagree";
            return (
              <button
                key={index}
                className={`likert-option ${optionClass}`}
                onClick={() => handleSelectOption(option.weight)}
              >
                {option.text}
              </button>
            );
          })}
        </div>

      </div>

      {/* Ad Banner placement under the quiz card for continuous monetisation */}
      <AdBanner type="banner" />
      
    </div>
  );
}

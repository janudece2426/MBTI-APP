/**
 * KakaoTalk Sharing Integration Helper
 */

// Replace this with your actual Kakao Javascript App Key from Kakao Developers console.
export const KAKAO_APP_KEY = "26b7fb3461677345eb2fc5201b5c1a37"; 

export const initKakao = () => {
  if (window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      try {
        // Only initialize if the key is provided and is not the default placeholder
        if (KAKAO_APP_KEY && KAKAO_APP_KEY !== "YOUR_KAKAO_APP_KEY") {
          window.Kakao.init(KAKAO_APP_KEY);
          console.log("Kakao SDK successfully initialized.");
        } else {
          console.warn("Kakao App Key is not configured. KakaoTalk sharing will fallback to clipboard copy.");
        }
      } catch (error) {
        console.error("Failed to initialize Kakao SDK:", error);
      }
    }
  } else {
    console.warn("Kakao script is not loaded in window.");
  }
};

export const shareMbtiResult = (mbtiCode, title, tagline) => {
  // Ensure Kakao is initialized
  initKakao();

  const shareText = `나의 MBTI 유형은 [${mbtiCode} - ${title}] 입니다!\n"${tagline}"\n\n무료 MBTI 테스트 하러 가기: ${window.location.origin}`;

  // Check if Kakao is available and initialized
  if (window.Kakao && window.Kakao.isInitialized()) {
    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `MBTI 테스트 결과: ${mbtiCode} (${title})`,
          description: tagline,
          imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", // Elegant, calming background placeholder
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
        buttons: [
          {
            title: "테스트 하러가기",
            link: {
              mobileWebUrl: window.location.origin,
              webUrl: window.location.origin,
            },
          },
        ],
      });
      return { success: true, method: "kakao" };
    } catch (error) {
      console.error("Kakao sharing failed, falling back to clipboard:", error);
    }
  }

  // Fallback: Clipboard Copy
  try {
    navigator.clipboard.writeText(shareText);
    return { success: true, method: "clipboard" };
  } catch (error) {
    console.error("Clipboard copy failed:", error);
    return { success: false, method: "none" };
  }
};

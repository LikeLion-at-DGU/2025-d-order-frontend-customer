//100vh를 사용했을때 모바일에서 스크롤생기는것을 방지하는 훅

import { useEffect } from "react";

const useVh = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // 초기 설정
    window.addEventListener("resize", setVh); // 리사이즈 이벤트 리스너 추가

    return () => {
      window.removeEventListener("resize", setVh); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);
};

export default useVh;

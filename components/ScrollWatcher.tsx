"use client";

import { useEffect, useRef } from "react";

const ScrollWatcher = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        if (scrollRef.current) {
          const scrollProgress =
            window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight);

          // Tạo màu xanh nhạt đến xanh đậm dựa trên tiến trình cuộn
          const lightness = Math.max(60 - scrollProgress * 40, 30);
          scrollRef.current.style.backgroundColor = `hsl(200, 100%, ${lightness}%)`;

          // Cập nhật thanh tiến trình
          scrollRef.current.style.transform = `scaleX(${scrollProgress})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Cập nhật lần đầu khi tải trang

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "3px",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100%",
        transformOrigin: "left",
        transform: "scaleX(0)",
        transition: "transform 0.2s ease-out", // Làm mượt tiến trình
      }}
    />
  );
};

export default ScrollWatcher;

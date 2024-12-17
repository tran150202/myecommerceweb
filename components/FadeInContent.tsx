"use client";
import { useEffect, useRef, useState } from "react";

const FadeInContent = (props: React.HTMLProps<HTMLDivElement>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Nếu phần tử xuất hiện trong viewport, bật hiệu ứng sáng
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={contentRef}
      {...props} // Truyền tất cả props mà <div> nhận được
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "scale-100 opacity-100 animate-fadeIn"
          : "scale-90 opacity-0 animate-fadeOut"
      } ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default FadeInContent;

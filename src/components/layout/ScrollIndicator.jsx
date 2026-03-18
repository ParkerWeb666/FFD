import { useEffect, useState } from "react";
import "./ScrollIndicator.css";
import { createPortal } from "react-dom";

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(window.scrollY / totalHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return createPortal(
    <div className="scroll-container">
      <div
  className="scroll-bar"
  style={{ height: `${scroll * 100}%` }}
/>
    </div>,
    document.body
  );
}
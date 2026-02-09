import { useMemo } from "react";
import "./floatingCode.css";

const commands = ["fn", "const", "(() =>", "<>", "[]", "{}", "let", "return"];

export default function FloatingCode() {
  const items = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      text: commands[Math.floor(Math.random() * commands.length)],
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 20,
      size: 12 + Math.random() * 18,
    }));
  }, []);

  return (
    <div className="floating-container">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-item"
          style={{
            left: `${item.left}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

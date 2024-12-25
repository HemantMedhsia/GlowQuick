import React, { useState, useEffect } from "react";
import GlowquickCursur from "../../assets/Images/glowQuickCursur.gif";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ position: "fixed" }}
    >
      <div
        className="absolute"
        style={{
          left: `${cursorPosition.x-100}px`,
          top: `${cursorPosition.y-100}px`,
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
        }}
      >
        <img
          src={GlowquickCursur}
          alt="Cursor Glow"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default CursorFollower;

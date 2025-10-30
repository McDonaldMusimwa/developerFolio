import React, { useEffect, useState } from "react";
import "./cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickCursor = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 1500); 
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickCursor);
    };
  }, []);

  return (
    <div
      className={`mouseCursor ${clicked ? "clicked" : ""}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {clicked && <div className="nameLabel">McDonald</div>}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf;
    const lerp = (a, b, n) => a + (b - a) * n;
    const animate = () => {
      setTrail((t) => ({
        x: lerp(t.x, pos.x, 0.1),
        y: lerp(t.y, pos.y, 0.1),
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  useEffect(() => {
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const over = (e) => {
      if (e.target.closest("a, button, [data-hover]")) setHovered(true);
    };
    const out = () => setHovered(false);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: clicked ? 6 : 8,
          height: clicked ? 6 : 8,
          borderRadius: "50%",
          background: "var(--accent)",
          zIndex: 9999,
          pointerEvents: "none",
          transition: "width 0.1s, height 0.1s",
        }}
      />
      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          opacity: hovered ? 0.6 : 0.3,
          zIndex: 9998,
          pointerEvents: "none",
          transition: "width 0.25s, height 0.25s, opacity 0.25s",
        }}
      />
    </>
  );
}

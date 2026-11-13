import { useRef } from "react";

// Carousel horizontal: bisa digeser (swipe di HP, drag di desktop, atau tombol panah)
export default function Carousel({ title, children }) {
  const track = useRef(null);
  const st = useRef({ on: false, x: 0, left: 0, moved: false });

  const down = (e) => {
    if (e.pointerType === "touch") return; // sentuhan pakai scroll native
    st.current = { on: true, x: e.clientX, left: track.current.scrollLeft, moved: false };
    track.current.classList.add("drag");
  };
  const move = (e) => {
    const s = st.current;
    if (!s.on) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 5) s.moved = true;
    track.current.scrollLeft = s.left - dx;
  };
  const up = () => { st.current.on = false; track.current.classList.remove("drag"); };
  const block = (e) => { if (st.current.moved) { e.preventDefault(); e.stopPropagation(); st.current.moved = false; } };
  const go = (dir) => track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div className="car">
      <div className="car-head">
        <h2 className="sec-h">{title}</h2>
        <div className="car-btns">
          <button onClick={() => go(-1)} aria-label="Geser ke kiri">←</button>
          <button onClick={() => go(1)} aria-label="Geser ke kanan">→</button>
        </div>
      </div>
      <div className="track" ref={track} onPointerDown={down} onPointerMove={move}
        onPointerUp={up} onPointerLeave={up} onClickCapture={block} onDragStart={(e) => e.preventDefault()}>
        {children}
      </div>
      <p className="hint">Geser untuk melihat yang lain</p>
    </div>
  );
}
